import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import React from 'react'
import Navbar from './navbar'
import Sidenav from './sidenav'
import { Box, Flex } from '@chakra-ui/react'
import AppContext, { IAppContext } from '../../state/AppContext'
import { useRouter } from 'next/dist/client/router'

//https://dev.to/ozanbolel/layout-persistence-in-next-js-107g

interface LayoutProps {
  children: React.ReactNode,
  theme?: 'dark' | 'light',
}


export default function Layout({children, theme}: LayoutProps) {

  const appState = React.useContext(AppContext);
  const router = useRouter();

  return (
    <Flex flexDirection="column" height="100%">
      <Box flex="initial">
        <Navbar bg="#00a65a" bgl="#5ADE8D"></Navbar>
      </Box>
      <Box flex="auto" >
        <Flex h="100%">
          { appState.openedMenu ? <Sidenav ></Sidenav> : null }
          <Box w="100%">
            { children }
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}