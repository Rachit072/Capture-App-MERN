import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

export default function Shimmer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{mt:5}}>
        <Skeleton variant="rounded" width="100%" height={300} />
      </Grid>
      <Grid item xs={6} sx={{mt:5}}>
        <Skeleton variant="rounded" width="100%" height={300} />
      </Grid>
    </Grid>
  );
}
