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
          calorie: user.calorie,
          carbohydrate: user.carbohydrate,
          fat: user.fat,
          protein: user.protein,
          accessToken: user.token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.calorie = token.calorie;
      session.user.carbohydrate = token.carbohydrate;
      session.user.fat = token.fat;
      session.user.protein = token.protein;
      session.token = token.accessToken;

      return session;
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
            calorie: data.user.calorie,
            carbohydrate: data.user.carbohydrate,
            fat: data.user.fat,
            protein: data.user.protein,
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
