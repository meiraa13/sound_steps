import { Box } from "@chakra-ui/react"
import "./styles.scss"
import { MainHeading } from "@/components/Heading"
import { KeyForm } from "@/components/Form"
import { Scales } from "@/components/Scales"
import { EmptyState } from "@/components/ui/empty-state"
import { useContext } from "react"
import { ScalesContext } from "@/providers/ScalesContext"
import { GiMusicalScore } from "react-icons/gi"

export function Home() {
  const { scales } = useContext(ScalesContext)
  return (
    <Box className='home-div'>
      <MainHeading />
      <KeyForm />

      {scales ? (
        <Scales />
      ) : (
        <EmptyState
          size='lg'
          icon={<GiMusicalScore />}
          marginTop='10'
          title='Choose a key'
          description='select a key to discover all of its scales and chord progression'
        />
      )}
    </Box>
  )
}
