import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const switchTheme = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<>
			<Button
				size={'sm'}
				onClick={toggleColorMode}
				bg={useColorModeValue('purple.300', 'yellow.500')}
			>
				🌔CSwitch theme
			</Button>
		</>
	)
}

export default switchTheme
