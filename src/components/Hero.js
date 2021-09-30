import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

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
        <Box>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box
              key={item}
              color={theme.palette.secondary.main}
              display={'inline'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={24}
                height={24}
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Box>
          ))}
        </Box>
        <Typography>Out of 100+ reviews on Yelp</Typography>
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
        <Box>
          1701 Corporate Drive Suite C6, Ladera Ranch CA 92694
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

export default Hero;
