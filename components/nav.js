import { Box, HStack, Link, Spacer } from '@chakra-ui/react'
import SwitchTheme from './toggle-button-theme'

const Navbar = () => {
	return (
		<Box display={'flex'} pos={'fixed'} width={'98%'}>
			<HStack spacing={'2'}>
				<Link>Git</Link>
				<Link>Git</Link>
				<Link>Git</Link>
			</HStack>
			<Spacer />
			<SwitchTheme />
		</Box>
	)
}

export default Navbar
