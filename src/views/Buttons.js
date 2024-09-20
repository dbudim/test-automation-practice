import React from "react";
import {
  Card,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const Buttons = () => {
  const width = 500;
  const height = 70;

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [showText, setShowText] = React.useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  return (
    <div data-testid="buttons-container">
      <Grid2 container spacing={4} data-testid="grid-container">
        <Grid2 item data-testid="grid-item-1">
          <h4>Button</h4>
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
              variant="contained"
              color="primary"
              style={{ margin: "10px" }}
              data-testid="button-1"
              onClick={handleClick}
            >
              CLICK ME
            </Button>
            <Button
              disabled
              variant="contained"
              color="primary"
              style={{ margin: "10px" }}
              data-testid="button-2"
            >
              CLICK ME
            </Button>
            {showText && <p data-testid="text">Button was clicked!</p>}
          </Card>
        </Grid2>
        <Grid2 item data-testid="grid-item-2">
          <h4>Checkbox</h4>
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
            <FormControlLabel
              control={<Checkbox />}
              label="Check 1"
              style={{ margin: "10px" }}
              data-testid="checkbox-1"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Check 2"
              style={{ margin: "10px" }}
              data-testid="checkbox-2"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Check 3"
              style={{ margin: "10px" }}
              data-testid="checkbox-3"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Check 4"
              disabled
              style={{ margin: "10px" }}
              data-testid="checkbox-4"
            />
          </Card>
        </Grid2>
        <Grid2 item data-testid="grid-item-3">
          <h4>Radio Group</h4>
          <Card
            sx={{
              width: width,
              height: height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-testid="card-3"
          >
            <FormControl data-testid="form-control">
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                data-testid="form-label"
              >
                Options
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                data-testid="radio-group"
              >
                <FormControlLabel
                  value="radio1"
                  control={<Radio />}
                  label="Radio 1"
                  data-testid="radio-1"
                />
                <FormControlLabel
                  value="radio2"
                  control={<Radio />}
                  label="Radio 2"
                  data-testid="radio-2"
                />
                <FormControlLabel
                  value="radio3"
                  control={<Radio />}
                  label="Radio 3"
                  data-testid="radio-3"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="Radio 4"
                  data-testid="radio-4"
                />
              </RadioGroup>
            </FormControl>
          </Card>
        </Grid2>
        <Grid2 item data-testid="grid-item-4">
          <h4>Switch</h4>
          <Card
            sx={{
              width: width,
              height: height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-testid="card-4"
          >
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Switch 1"
              style={{ margin: "10px" }}
              data-testid="switch-1"
            />
            <FormControlLabel
              control={<Switch disabled />}
              label="Switch 2"
              style={{ margin: "10px" }}
              data-testid="switch-2"
            />
          </Card>
        </Grid2>
        <Grid2 item data-testid="grid-item-5">
          <h4>Toggle</h4>
          <Card
            sx={{
              width: width,
              height: height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-testid="card-5"
          >
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              data-testid="toggle-button-group"
            >
              <ToggleButton value="toggle1" data-testid="toggle-button-1">
                TOGGLE 1
              </ToggleButton>
              <ToggleButton value="toggle2" data-testid="toggle-button-2">
                TOGGLE 2
              </ToggleButton>
              <ToggleButton value="toggle3" data-testid="toggle-button-3">
                TOGGLE 3
              </ToggleButton>
            </ToggleButtonGroup>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Buttons;
