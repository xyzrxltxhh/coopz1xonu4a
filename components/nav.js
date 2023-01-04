import { Box, Link, Spacer, Stack, useColorModeValue } from '@chakra-ui/react'
import SwitchTheme from './toggle-button-theme'

const theme = {
  'dark': '#00000001',
  'light': '#00000000'
}

const Navbar = () => {
	return (
		<Box
			padding={'2'}
			width={'100%'}
			display={'flex'}
			position={'fixed'}
			css={{ backdropFilter: 'blur(10px)' }}
			bg={useColorModeValue(theme.light, theme.dark)}
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
