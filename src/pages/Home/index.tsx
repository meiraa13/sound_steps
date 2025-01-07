import { Box } from "@chakra-ui/react"
import "./styles.scss"
import { MainHeading } from "@/components/Heading"
import { KeyForm } from "@/components/Form"

export function Home() {
  return (
    <Box className='home-div'>
      <MainHeading />
      <KeyForm />
    </Box>
  )
}
