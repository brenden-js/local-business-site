import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image'
import Footer from '../src/components/Footer';
import { useTheme } from '@mui/material/styles';

export default function Index() {
  const theme = useTheme();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Image src={'/rancho-horizontal-logo-v2-300x113.png'} alt="logo" width={135} height={50} />
        </Toolbar>
      </AppBar>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Box sx={{ mt: 12 }}>
            <Hero />
          </Box>
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Features />
        </Container>
      </Box>
      <Box>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
};
