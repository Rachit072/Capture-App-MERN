import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

export default function Shimmer() {
  return (
    <Grid container spacing={2}>
    {[...Array(9)].map((_, index) => (
        <Grid key={index} item xs={4}>
            <Skeleton variant="rounded" width="100%" height={300} />
        </Grid>
    ))}
    </Grid>
  );
}
