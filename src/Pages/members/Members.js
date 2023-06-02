import React from "react";
import "./Members.css";
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
import { Autocomplete } from "@mui/material";
import { Input } from "@mui/icons-material";

const Members = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      //   border: "1px solid #fff",
    },
    [`&.${tableCellClasses.body}`]: {
      //   color: theme.palette.common.white,
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#C7E9B0",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#FFA559",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Furniba", 202020, 6.0, 24, 4.0),
    createData("Skillwise", 202020, 9.0, 37, 4.3),
    // createData("Eclair", 262, 16.0, 24, 6.0),
    // createData("Cupcake", 305, 3.7, 67, 4.3),
    // createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="member">
      <div className="member-main">
        <div className="in-name">
          <TextField
            id="standard-basic"
            color="info"
            label="search name"
            variant="standard"
          />
        </div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Stack
              direction="row"
              spacing={4}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography>Narayan</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "60vw" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Current Project</StyledTableCell>
                    <StyledTableCell align="center">Start Date</StyledTableCell>
                    <StyledTableCell align="center">End Date</StyledTableCell>
                    <StyledTableCell align="center">Yield</StyledTableCell>
                    <StyledTableCell align="center">
                      Next Free At
                    </StyledTableCell>
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
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Stack
              direction="row"
              spacing={4}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography>Narayan</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "60vw" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Current Project</StyledTableCell>
                    <StyledTableCell align="center">Start Date</StyledTableCell>
                    <StyledTableCell align="center">End Date</StyledTableCell>
                    <StyledTableCell align="center">Yield</StyledTableCell>
                    <StyledTableCell align="center">
                      Next Free At
                    </StyledTableCell>
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
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Stack
              direction="row"
              spacing={4}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography>Narayan</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "60vw" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Current Project</StyledTableCell>
                    <StyledTableCell align="center">Start Date</StyledTableCell>
                    <StyledTableCell align="center">End Date</StyledTableCell>
                    <StyledTableCell align="center">Yield</StyledTableCell>
                    <StyledTableCell align="center">
                      Next Free At
                    </StyledTableCell>
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
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Stack
              direction="row"
              spacing={4}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography>Narayan</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "60vw" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Current Project</StyledTableCell>
                    <StyledTableCell align="center">Start Date</StyledTableCell>
                    <StyledTableCell align="center">End Date</StyledTableCell>
                    <StyledTableCell align="center">Yield</StyledTableCell>
                    <StyledTableCell align="center">
                      Next Free At
                    </StyledTableCell>
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
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Members;
