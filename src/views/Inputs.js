import React from "react";
import { Card, Grid2, TextareaAutosize, Box, TextField } from "@mui/material";

const width = 500;
const height = 180;

const Inputs = () => {
  const [text, setText] = React.useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div data-testid="buttons-container">
      <Grid2 container spacing={4} data-testid="grid-container">
        <Grid2 item data-testid="grid-item-1">
          <h4>Text Fields</h4>
          <Card
            sx={{
              width: width,
              height: height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            data-testid="card-1"
          >
            <div style={{ marginBottom: "10px" }}></div>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </Box>
          </Card>
        </Grid2>
        <Grid2 item data-testid="grid-item-2">
          <h4>Textarea Autosize</h4>
          <Card
            sx={{
              width: width,
              height: height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            data-testid="card-2"
          >
            <div style={{ marginBottom: "10px" }}></div>
            <TextareaAutosize
              minRows={2}
              style={{ width: "90%", height: "10%" }}
              value={text}
              onChange={handleTextChange}
            />
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Inputs;
