import { ScalesContext } from "@/providers/ScalesContext"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useContext } from "react"

export function Scales() {
  const { scales } = useContext(ScalesContext)
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='5'
      marginTop='10'>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Major Scale:</Heading>
        {scales?.major.map((note) => (
          <Text
            shadow='sm'
            rounded='md'
            bgColor='gray.100'
            padding='6px 10px'
            key={note}>
            {note}
          </Text>
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Pentatonic Scale:</Heading>
        {scales?.pentatonic.map((note) => (
          <Text
            shadow='sm'
            rounded='md'
            bgColor='gray.100'
            padding='6px 10px'
            key={note}>
            {note}
          </Text>
        ))}
      </Flex>
    </Box>
  )
}
