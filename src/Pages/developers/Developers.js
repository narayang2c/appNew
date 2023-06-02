import React, { useState } from "react";
import "./Developers.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Stack, TextField } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Input } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Developers = () => {
  const [val, setVal] = useState("");
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      border: "1px solid #fff",
    },
    [`&.${tableCellClasses.body}`]: {
      //   color: theme.palette.common.white,
      fontSize: 14,
      border: "1px solid #fff",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#ECF8F9",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#DBDFEA",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: "1px solid #fff",
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Furniba", 202020, 6.0, 24, 4.0, 5),
    createData("Skillwise", 202020, 9.0, 37, 4.3, 6),
    // createData("Eclair", 262, 16.0, 24, 6.0, 5),
    // createData("Cupcake", 305, 3.7, 67, 4.3,6),
    // createData("Gingerbread", 356, 16.0, 49, 3.9, 6),
  ];

  return (
    <div className="developer">
      <div>
        <div className="name">Name : Narayan</div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "60vw" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Project Name</StyledTableCell>
                <StyledTableCell align="center">
                  Asign Total Hours
                </StyledTableCell>
                <StyledTableCell align="center">Remarks</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">End Date</StyledTableCell>
                <StyledTableCell align="center">Working Hours</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <TextField
                      id="standard-basic"
                      label="Add remarks"
                      variant="standard"
                      color="secondary"
                      size="small"
                      // value={val}
                      // onChange={(e) => setVal(e.target.value)}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.protein}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button variant="contained" color="success" size="small">
                        Start
                      </Button>
                      <Button variant="contained" color="error" size="small">
                        Stop
                      </Button>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Developers;
