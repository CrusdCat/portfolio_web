import NextLink from 'next/link'
import {
  Heading,
  Box,
  chakra,

} from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, x: -300, y: 0 },
    enter: { opacity: 1, x: 50, y: 0 },
    exit: { opacity: 0, x: -0, y: 30 }
  }

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Profile = ({router }) => {
  return (
    <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 1.7, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
    <Box pt='20' w='280px' ml='20'>
        <ProfileImage
        src="/images/Profileimages.JPG"
        alt="Profile image"
        borderRadius="100"
        width="200"
        height="200"
        />
        <Box pt='3' display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    MinHyeok Jeon
                </Heading>
                <p>Developer ( ROS / App & Web / ML)</p>
                <p>Dept. of Computer Science</p>
            </Box>
        </Box>
    </Box>
    </>
    </motion.article>
  )
}

export default Profile