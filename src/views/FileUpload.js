import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Grid2 } from "@mui/material";
import Card from "@mui/material/Card";

const width = 500;
const height = 70;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <div data-testid="buttons-container">
      <Grid2 container spacing={4} data-testid="grid-container">
        <Grid2 item data-testid="grid-item-1">
        <h4>File Upload</h4>
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
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                multiple
              />
            </Button>
            <div>
              {files.length > 0 && (
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default FileUpload;
