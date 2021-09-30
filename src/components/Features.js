import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Features() {
  return (
    <Box
      sx={{
        py: 8
      }}
    >
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
        align={'center'}
      >
        Rancho Viejo Flooring
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        align={'center'}
        gutterBottom
      >
        Quality floors
        and incredible prices
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      >
        Serving Ladera Ranch, Rancho Mission Viejo, Lake Forest and
        <br />
        the surrounding areas.
      </Typography>
    </Box>
  );
};
