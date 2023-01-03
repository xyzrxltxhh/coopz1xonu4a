import { Container, Box } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"

function Home() {
  return(
    <Container>
      <Box bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.600") } 
           mb={6}
           p={4}
           borderRadius="lg"
           textAlign="center"
      >
        Welcome, my page!
      </Box>
    </Container>
  )
}

export default Home
