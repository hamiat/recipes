import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  "@global": {
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      background: "#313131",
    },
  },
  navLink: {
    color: "#f7f8fa",
    textDecoration: "none",
    padding: 48,
  },
  brand: {
    color: "orange"
     
  },
  create: {
    marginLeft: 40,
    border: "1px solid #f7f8fa",
    padding: 8,
    borderRadius: 2,
    '&:hover': {
        background: 'white',
        color: "darkmagenta",
      
      }
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <header className={classes.navbar}>
      <nav>
        <Link to="/" className={`${classes.brand} ${classes.navLink} `}>
          <h2>Cooking Hami</h2>
        </Link>
        <Link to="/create" className={`${classes.create} ${classes.navLink} `}>
          <h3>Create Recipe</h3>
        </Link>
      </nav>
    </header>
  );
}
