import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react'
import SwitchTheme from './toggle-button-theme'

const Navbar = () => {
	return (
		<Box
			display={'flex'}
			bg={useColorModeValue('#ccffff00', '#00001a00')}
			css={{ backdropFilter: 'blur(10px)' }}
			pos={'fixed'}
			width={'100%'}
		>
			<HStack mx={'auto'} spacing={'2'}>
				<Link>Git</Link>
				<Link>Git</Link>
				<Link>Git</Link>
			</HStack>
			<SwitchTheme />
		</Box>
	)
}

export default Navbar
