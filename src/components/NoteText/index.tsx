import { Text } from "@chakra-ui/react"

export function NoteText({ note }: { note: string }) {
  return (
    <Text
      shadow='sm'
      rounded='md'
      bgColor='gray.100'
      width='10'
      height='10'
      display='flex'
      justifyContent='center'
      alignItems='center'
      key={note}>
      {note}
    </Text>
  )
}
