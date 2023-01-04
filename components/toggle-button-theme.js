import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const theme = {
  'dark': 'yellow.500',
  'light': 'purple.300'
}

const switchTheme = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<>
			<Button
				size={'sm'}
				onClick={toggleColorMode}
				bg={useColorModeValue(theme.light, theme.dark)}
			>
				🌔
			</Button>
		</>
	)
}

export default switchTheme
