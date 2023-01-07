import { ChakraProvider, Box, theme } from '@chakra-ui/react'
import { Articles } from './components/Articles'
import { Navbar } from './components/Navigation'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign={'center'} fontFamily={'monospace'} fontSize={'xl'}>
			<Navbar />
			<Articles />
		</Box>
	</ChakraProvider>
)
