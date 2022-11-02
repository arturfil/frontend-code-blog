import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Link from "next/link";

function SideDrawer() {
  const [display, setDisplay] = useState<boolean>(true);
  const toggleMenu = () => setDisplay(!display);

  return (
    <Grid
      className="side-drawer"
      item
      xs={display ? 2 : 0}
      md={display ? 2 : 0}
      sx={{display: { xs: 6, md: 2 }}}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <KeyboardDoubleArrowLeftIcon onClick={toggleMenu} />
      </div>
      <Grid marginTop={4}>
        <Link href="/">
          <Grid className="sidenav" display="flex">
            <HomeIcon />
            <Grid
              style={{ display: display ? "flex" : "none", marginLeft: "12px" }}
              sx={{ flexDirection: "column" }}
            >
              Home
            </Grid>
          </Grid>
        </Link>

        <Link href="/posts/addPost">
          <Grid className="sidenav" display="flex">
            <Grid sx={{ display: "flex" }}>
              <AddCircleIcon />
              <Grid
                style={{
                  display: display ? "flex" : "none",
                  marginLeft: "12px",
                }}
                sx={{ flexDirection: "column" }}
              >
                Add Blog
              </Grid>
            </Grid>
          </Grid>
        </Link>

        <Link href="/">
          <Grid className="sidenav" display="flex">
            <Grid sx={{ display: "flex" }}>
              <CreateIcon />
              <Grid
                style={{
                  display: display ? "flex" : "none",
                  marginLeft: "12px",
                }}
                sx={{ flexDirection: "column" }}
              >
                Log In
              </Grid>
            </Grid>
          </Grid>
        </Link>
      </Grid>
    </Grid>
  );
}

export default SideDrawer;
