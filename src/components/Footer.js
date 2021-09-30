import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
    sx={{
      py: 3
    }}
  >
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            underline="none"
            href="/"
            title="rancho"
          >
            <Image src={'/rancho-horizontal-logo-v2-300x113.png'} alt="logo" width={135} height={50} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="secondary"
                component="a"
                target="blank"
                href="https://www.yelp.com/biz/rancho-viejo-flooring-ladera-ranch"
                size="small"
              >
                View reviews on Yelp
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="textSecondary"
          gutterBottom
        >
          &copy; Rancho Viejo Flooring 2021. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="textSecondary"
          component={'p'}
        >
          Licensed by Contractor&apos;s State License Board #887035
        </Typography>
      </Grid>
    </Grid>
  </Box>
  );
};
