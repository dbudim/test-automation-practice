import React from "react";
import {
  Card,
  Grid2,
  Box,
  CircularProgress,
  Skeleton,
  Stack,
} from "@mui/material";

const width = 500;
const height = 180;

const Loaders = () => {
  return (
    <Grid2 container spacing={4} data-testid="grid-container">
      <Grid2 item data-testid="grid-item-1">
        <h4>Spinner</h4>
        <Card
          sx={{
            width: width,
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-testid="card-1"
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </Card>
      </Grid2>
      <Grid2 item data-testid="grid-item-2">
        <h4>Skeleton</h4>
        <Card
          sx={{
            width: width,
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-testid="card-2"
        >
          <Stack spacing={1}> 
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Loaders;
