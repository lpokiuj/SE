import HeaderTabs from "./AppHeader"
import Footer from "./Footer"

import { Container } from '@mantine/core'

export default function Layout({ children }) {
	return (
		<div>
			<HeaderTabs/>
			<Container>
				{children}
			</Container>
			<Footer/>
		</div>
	)
}