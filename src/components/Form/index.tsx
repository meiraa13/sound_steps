import { Flex } from "@chakra-ui/react"
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select"
import { Button } from "../ui/button"
import { useContext } from "react"
import { ScalesContext } from "@/providers/ScalesContext"

export function KeyForm() {
  const { chromaticScale } = useContext(ScalesContext)

  return (
    <form>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent='center'
        marginTop='10'
        gap='2'
        alignItems='center'>
        <label>Key</label>
        <NativeSelectRoot width={{ base: "", md: "250px" }}>
          <NativeSelectField
            placeholder='Select a key'
            items={chromaticScale}
          />
        </NativeSelectRoot>
        <Button padding='4'>Generate Scales and Chords</Button>
      </Flex>
    </form>
  )
}
