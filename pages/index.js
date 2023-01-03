import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Articles from '../components/articles'
import Navbar from '../components/nav'

function Home() {
	return (
		<Box
			fontSize={'xl'}
			fontFamily={'mono'}
			bg={useColorModeValue('#ffffff40', '#20202380')}
		>
			<Navbar />
			<Articles />
		</Box>
	)
}

export default Home
