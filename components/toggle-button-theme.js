import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const theme = {
  'dark': 'purple.300',
  'light': 'yellow.500'
}

const switchTheme = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<>
			<Button
				size={'sm'}
				onClick={toggleColorMode}
				bg={useColorModeValue(theme.dark, theme.light)}
			>
				🌔
			</Button>
		</>
	)
}

export default switchTheme
