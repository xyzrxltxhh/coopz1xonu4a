import { Box, Link, Spacer, Stack, useColorModeValue } from '@chakra-ui/react'
import SwitchTheme from './toggle-button-theme'

const Navbar = () => {
	return (
		<Box
			padding={'2'}
			width={'100%'}
			display={'flex'}
			position={'fixed'}
			css={{ backdropFilter: 'blur(10px)' }}
			bg={useColorModeValue('#ccffff00', '#00001a00')}
		>
			<Stack direction={'row'} spacing={'2'}>
				<Link>Test</Link>
				<Link>Test</Link>
				<Link>Test</Link>
			</Stack>
			<Spacer />
			<SwitchTheme />
		</Box>
	)
}

export default Navbar
