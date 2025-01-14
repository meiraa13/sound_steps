import { ScalesContext } from "@/providers/ScalesContext"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { NoteText } from "../NoteText"

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
        <Heading>Ionan / Major:</Heading>
        {scales?.major.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Aeolian / Minor:</Heading>
        {scales?.minor.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Pentatonic:</Heading>
        {scales?.pentatonic.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Phrygian:</Heading>
        {scales?.phrygian.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Locryan:</Heading>
        {scales?.locrian.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Lydian:</Heading>
        {scales?.lydian.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Dorian:</Heading>
        {scales?.dorian.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
      <Flex
        justifyContent='center'
        gap='2'
        alignItems='center'>
        <Heading>Mixolydian:</Heading>
        {scales?.mixolydian.map((note) => (
          <NoteText
            note={note}
            key={note}
          />
        ))}
      </Flex>
    </Box>
  )
}
