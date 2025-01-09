import { Flex } from "@chakra-ui/react"
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select"
import { Button } from "../ui/button"
import { useContext } from "react"
import { ScalesContext } from "@/providers/ScalesContext"
import { useForm } from "react-hook-form"

type formValue = {
  note: string
}

export function KeyForm() {
  const { chromaticScale, generateMajorScale, generatePentatonicScale, setScales } = useContext(ScalesContext)
  const { handleSubmit, register } = useForm<formValue>()

  function submitData(data: formValue) {
    const majorScale = generateMajorScale(data.note)
    const pentatonicScale = generatePentatonicScale(majorScale)

    setScales({
      major: majorScale,
      pentatonic: pentatonicScale,
    })
  }

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent='center'
        marginTop='10'
        gap='2'
        alignItems='center'>
        <label>Key</label>
        <NativeSelectRoot width={{ base: "", md: "250px" }}>
          <NativeSelectField
            {...register("note")}
            placeholder='Select a key'
            items={chromaticScale}
          />
        </NativeSelectRoot>
        <Button
          type='submit'
          padding='4'>
          Generate Scales and Chords
        </Button>
      </Flex>
    </form>
  )
}
