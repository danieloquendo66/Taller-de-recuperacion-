import React from "react";
import { useDispatch } from "react-redux";

import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { filtrarProductos } from "../redux/actions";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { NUEVO, USADO, MAYOR, MENOR } from "../redux/types";

const useStyles = makeStyles((theme) => ({
  inputFilter: {
    marginRight: 40,
  },
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  Button: {
    marginRight: 12,
  },
}));

export const SearchBar = ({ setKeyword, products }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // console.log(products);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Taller de Recuperacion
          </Typography>
          <div className="d-flex justify-content-between">
            <Typography>
              Menor Precio{" "}
              <input
                className={classes.inputFilter}
                type="checkbox"
                id="menor"
                onChange={() => dispatch(filtrarProductos(MENOR))}
              />
            </Typography>

            <Typography>
              Mayor Precio{" "}
              <input
                className={classes.inputFilter}
                type="checkbox"
                id="mayor"
                onChange={() => dispatch(filtrarProductos(MAYOR))}
              />
            </Typography>
            <Typography>
              Nuevo{" "}
              <input
                className={classes.inputFilter}
                type="checkbox"
                id="nuevo"
                onChange={() => dispatch(filtrarProductos(NUEVO))}
              />
            </Typography>
            <Typography>
              Usado{" "}
              <input
                className={classes.inputFilter}
                type="checkbox"
                id="usado"
                onChange={() => dispatch(filtrarProductos(USADO))}
              />
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
