import React from "react";
import Link from "next/link";
import classes from "./styles/Button.module.css";

const Button = ({ link, children }) => {
  return (
    <Link href={link}>
      {/* eslint-disable-next-line */}
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export default Button;
