import Layout from '../components/layouts/main'
//import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import { Box, Container, Flex } from '@chakra-ui/react'
import Chakra from '../components/chakra'
import Profile from '../components/layouts/profile'


if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }
const Website = ({Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Flex>
                <Profile router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={()=> {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({top:0})
                        }
                    }}>
                        <Component {...pageProps} key={router.route}></Component>
                    </AnimatePresence>
                </Profile>
                <Layout router={router}>
                    <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={()=> {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({top:0})
                        }
                    }}>
                        <Component {...pageProps} key={router.route}></Component>
                    </AnimatePresence>
                </Layout>
            </Flex>
        </Chakra>
    )
}
export default Website