import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
// import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
 import Layout from '../components/layouts/article'
// import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
// import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import Profile from '../components/layouts/profile'






const Page = () => {
    return (

        <Layout>
            <Container>
                <Flex>
                    <Box pl='20' display={'flex'}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="page-title">
                                Welcome to My portfolio website !
                            </Heading>
                            <p>Developer ( ROS / App & Web / ML)</p>
                            <p>Dept. of Computer Science</p>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Layout>
    )
}

export default Page
