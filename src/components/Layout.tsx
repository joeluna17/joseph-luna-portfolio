import { Box, Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: any
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Container maxWidth={false} style={{ padding: 0, margin: 0 }}>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '120px' }}>{children}</Box>
      <Footer />
    </Container>
  )
}

export default Layout