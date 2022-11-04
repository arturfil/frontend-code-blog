import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {
  icon: JSX.Element;
  display: boolean;
  link: string;
  title: string;
}

export default function DrawerLink({ icon, display, link, title }: Props) {
  return (
    <Link href={link}>
      <Grid className="sidenav" display="flex">
        <Grid sx={{ display: "flex" }}>
          <>{icon}</>
          <Grid
            style={{
              display: display ? "flex" : "none",
              marginLeft: "12px",
            }}
            sx={{ flexDirection: "column" }}
          >
            {title}
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
}
