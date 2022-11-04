import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLogIn } from "../../features/accountSlice";
import DrawerLink from "../individual/DrawerLink";
import { toast } from "react-toastify";

function SideDrawer() {
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector(state => state.account);
  const [display, setDisplay] = useState<boolean>(true);
  const toggleMenu = () => setDisplay(!display);

  const handleLogOut = () => {
    localStorage.removeItem("jwt-code-blog");
    toast.error("Loged Out");
    dispatch(setLogIn(false));
  };

  return (
    <Grid
      className="side-drawer"
      item
      xs={display ? 2 : 0}
      md={display ? 2 : 0}
      sx={{ display: { xs: 6, md: 2 } }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <KeyboardDoubleArrowLeftIcon onClick={toggleMenu} />
      </div>
      <Grid marginTop={4}>
        <DrawerLink
          icon={<HomeIcon />}
          display={display}
          link={"/"}
          title={"Home"}
        />
        { !loggedIn ? (
          <DrawerLink
            icon={<LoginIcon />}
            display={display}
            link={"/auth/login"}
            title={"Login"}
          />
        ): (
          <>
            <DrawerLink
              icon={<AddCircleIcon />}
              display={display}
              link={"/posts/addPost"}
              title={"Add Blog"}
            />
            
            <Grid onClick={handleLogOut} className="sidenav" display="flex">
              <Grid sx={{ display: "flex" }}>
                <ExitToAppIcon/>
                <Grid
                  style={{
                    display: display ? "flex" : "none",
                    marginLeft: "12px",
                  }}
                  sx={{ flexDirection: "column" }}
                >
                  Log Out
                </Grid>
              </Grid>
            </Grid>
          </>
        )}


      </Grid>
    </Grid>
  );
}

export default SideDrawer;
