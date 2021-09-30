import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Image src={'/rancho-horizontal-logo-v2-300x113.png'} alt="logo" width={135} height={50} />
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 16 }}>
          <Hero />
        </Box>
        <Box sx={{ my: 8 }}>
          <Features />
        </Box>
      </Container>
    </>
  )
}