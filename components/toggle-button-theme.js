import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const switchTheme = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<>
			<Button
				size={'sm'}
				m={'2'}
				bg={useColorModeValue('purple.300', 'yellow.500')}
				onClick={toggleColorMode}
			>
				🌔
			</Button>
		</>
	)
}

export default switchTheme
