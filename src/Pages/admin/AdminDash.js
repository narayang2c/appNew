import React from "react";
import "./AdminDash.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AdminDash = () => {
  return (
    <div className="admin">
      <div className="main">
        <div className="form">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, pb: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Employee Name"
              variant="standard"
              color="secondary"
              focused
            />
            <TextField
              label="Company/Client"
              variant="standard"
              color="secondary"
              focused
            />
            {/* <TextField label="Outlined secondary" color="secondary" focused /> */}
            <TextField
              id="standard-number"
              color="secondary"
              label="Time Duration"
              type="Time"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, pb: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Start Date"
              variant="standard"
              color="success"
              type="date"
              focused
            />
            <TextField
              label="End Date"
              variant="standard"
              color="warning"
              type="date"
              focused
            />
            <TextField
              variant="filled"
              id="outlined-textarea"
              color="secondary"
              label="Remarks"
              placeholder="Remarks in details"
              multiline
            />
          </Box>
          {/* <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
          </Box> */}
        </div>
        <div className="plus-btn">
          <Button variant="contained" color="secondary" size="small">
            Plus
          </Button>
        </div>

        <div className="submit-btn">
          <Button variant="contained" color="success">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
