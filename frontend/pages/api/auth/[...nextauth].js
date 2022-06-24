import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetcher } from "../../../config/fetcher";

export default NextAuth({
  secret: "secret",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, token: token.accessToken };
    },
  },
  providers: [
    CredentialsProvider({
      name: "custom",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "johndoe@dev.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const res = await fetcher.post("/auth/login", payload);
          const data = res.data;
          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            token: data.token,
          };
        } catch (error) {
          console.error({ error });
          return null;
        }
      },
    }),
  ],
});
