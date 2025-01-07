import { Heading, Highlight } from "@chakra-ui/react"

export function MainHeading() {
  return (
    <Heading
      size='2xl'
      textAlign='center'>
      <Highlight
        query={["Discover", "Music", "Your"]}
        styles={{ color: "teal.600" }}>
        Create, Play, Inspire: Discover the perfect chords and scales for Your Music
      </Highlight>
    </Heading>
  )
}
