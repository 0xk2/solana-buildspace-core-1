import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Center, Spacer, Stack } from '@chakra-ui/layout'
import NavBar from '@/components/NavBar'
import Disconnected from '@/components/Disconnected'
import { useWallet } from '@solana/wallet-adapter-react'
import Connected from '@/components/Connected'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {connected} = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="description" content="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center">
          <Stack w="full" h="calc(100vh)" justify="center">
            <NavBar/>
            <Spacer />
            <Center>
              {connected ? <Connected/> : <Disconnected/>}
            </Center>
            <Spacer/>
            <Center>
              <Box marginBottom={4} color="white">
                <a
                  href="https://twitter.com/_buildspace"
                  target="_blank"
                  rel="noopener noreferrer">
                    built with @_buildspace
                  </a>
              </Box>
            </Center>
          </Stack>
      </Box>
    </div>
  )
}
