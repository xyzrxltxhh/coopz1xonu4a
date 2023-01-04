import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Articles from '../components/articles'
import Navbar from '../components/nav'

const theme = {
  'dark': '#ffffff40',
  'light': '#20202380'
}



function Home() {
	return (
		<Box
			fontSize={'xl'}
			fontFamily={'mono'}
			bg={useColorModeValue(theme.dark, theme.light)}
		>
			<Navbar />
			<Articles />
		</Box>
	)
}

export default Home
