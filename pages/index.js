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
import Body_card from '../components/layouts/body_card'
import Section from '../components/section_motion'





const Page = () => {
    return (

        <Layout>
            <Container maxW="600opx" pt={10} ml={14}>
                    <Box pl='1' display={'flex'}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="page-title">
                                Welcome to My portfolio website!
                            </Heading>
                            <p>Developer ( ROS / App & Web / ML)</p>
                            <p>Dept. of Computer Science</p>
                        </Box>
                    </Box>
                    <Section delay={0.7}>
                        <Body_card></Body_card>
                    </Section>
            </Container>
        </Layout>
    )
}

export default Page
