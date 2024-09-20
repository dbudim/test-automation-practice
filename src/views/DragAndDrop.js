import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const DragAndDrop = () => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const ball = document.getElementById(data);
    event.target.appendChild(ball);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Drag & Drop View
      </Typography>
      <Typography variant="body1" gutterBottom>
        Drag and drop functionality is implemented here.
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
      >
        <Paper
          id="bucket1"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          sx={{
            width: 200,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
          }}
        >
          <Typography>Bucket 1</Typography>
        </Paper>
        <Paper
          id="bucket2"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          sx={{
            width: 200,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
          }}
        >
          <Typography>Bucket 2</Typography>
        </Paper>
      </Box>
      <Box
        id="ball"
        draggable="true"
        onDragStart={handleDragStart}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "green",
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>BALL</Typography>
      </Box>
    </Box>
  );
};

export default DragAndDrop;
