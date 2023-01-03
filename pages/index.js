import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Navbar from '../components/nav'

function Home() {
	return (
		<Box
			m={'5'}
			w={'100%'}
			h={'100vh'}
			bg={useColorModeValue('#ffffff40', '#20202380')}
		>
			<Navbar />
		</Box>
	)
}

export default Home
