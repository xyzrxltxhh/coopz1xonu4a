import { Box, Center, Spacer, useColorModeValue } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export const Navbar = () => {
	return (
		<Box
			p={2}
			display={'flex'}
			position={'fixed'}
			width={'100%'}
			css={{ backdropFilter: 'blur(10px)' }}
			bg={useColorModeValue('whiteAlpha.400', 'blackAlpha.400')}
		>
			<ColorModeSwitcher justifySelf='flex-end' />
			<Spacer />
			<Center>asldsa</Center>
		</Box>
	)
}
