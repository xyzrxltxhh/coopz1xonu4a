import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Articles from '../components/articles'
import Navbar from '../components/nav'

const theme = {
  'dark': '#20202380',
  'light': '#ffffff40'
}

function Home() {
	return (
		<Box
			fontSize={'xl'}
			fontFamily={'mono'}
			bg={useColorModeValue(theme.light, theme.dark)}
		>
			<Navbar />
			<Articles />
		</Box>
	)
}

export default Home
