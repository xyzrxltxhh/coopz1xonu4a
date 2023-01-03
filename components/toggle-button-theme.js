import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const switchTheme = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<>
			<Button
				bg={useColorModeValue('purple.300', 'yellow.500')}
				onClick={toggleColorMode}
				onFocus={console.log('Hello World!')}
			>
				🌔
			</Button>
		</>
	)
}

export default switchTheme
