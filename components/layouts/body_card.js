import { motion } from 'framer-motion'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import Head from 'next/head'
//import { GridItemStyle } from '../grid-item'
import Section from '../section_motion'


const Body_card = () => {
  return (
    <SimpleGrid pt={10} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 3fr))'>
      <Section delay={0.8}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
      <Section delay={1}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
      <Section delay={1.2}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
      <Section delay={1.4}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
      <Section delay={1.6}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
      <Section delay={1.8}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
      <Section delay={2}>
        <Card>
          <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
          <Button>View here</Button>
          </CardFooter>
      </Card>
      </Section>
    </SimpleGrid>
  )
}

export default Body_card