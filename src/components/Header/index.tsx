import { Box, IconButton, List } from "@chakra-ui/react"
import "./styles.scss"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerRoot, DrawerTrigger } from "@/components/ui/drawer"

export function Header() {
  return (
    <Box
      as='header'
      className='box-header'>
      <h2>Sound Steps</h2>
      <Box
        as='nav'
        hideBelow='md'
        display='flex'
        gap='1rem'>
        <Link to='/'>Scales</Link>
        <Link to='/metronome'>Metronome</Link>
        <Link to='/exercises'>Exercises</Link>
      </Box>
      <Box hideFrom='md'>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <IconButton size='sm'>
              <RxHamburgerMenu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent
            offset='2'
            rounded='sm'
            padding='1rem'>
            <DrawerBody>
              <List.Root>
                <List.Item>
                  <Link to='/'>Scales</Link>
                </List.Item>
                <List.Item>
                  <Link to='/metronome'>Metronome</Link>
                </List.Item>
                <List.Item>
                  <Link to='/exercises'>Exercises</Link>
                </List.Item>
              </List.Root>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Box>
    </Box>
  )
}
