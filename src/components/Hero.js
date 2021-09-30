import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import GoogleMapReact from 'google-map-react';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function Hero() {

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        sx={{
          fontWeight: 800,
        }}
      >
        Building beautiful floors since 2006
      </Typography>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          color="textPrimary"
        >
          Browse our wide selection of wood, LVP, porcelain, carpet and more
          at our Ladera Ranch showroom.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        data-aos={'fade-right'}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href="https://www.yelp.com/biz/rancho-viejo-flooring-ladera-ranch"
          title="rancho"
          paddingBottom={1}
        >
          <Image src={'/stars.png'} alt="stars" width={126} height={24} />
        </Box>
        <Typography>Out of 100+ reviews on Yelp</Typography>
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
  );

  const GridItemFormBlock = () => (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={'100%'}
      component={Card}
      borderRadius={2}
      boxShadow={1}
    >
      <Box display="flex" flexDirection={'column'}>
        <Box
          sx={{ height: 300 }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBW0-u-LVIOZfa9isLPovbW_Pr_cWvxcJE' }}
            defaultCenter={{
              lat: 33.55514709735115, lng: -117.62899533420548
            }}
            defaultZoom={16}
          />
        </Box>
        <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
          <Divider />
        </Box>
        <Box>
          <Typography align={'center'} color="textSecondary" variant={'h6'}>
            Schedule an appointment now text/call:
          </Typography>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            align={'center'}
          >
            (949) 355-4444
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
