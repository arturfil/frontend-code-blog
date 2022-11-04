import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Grid } from "@mui/material";
import SideDrawer from "../components/layout/SideDrawer";
import { ToastContainer } from "react-toastify";

// styles
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/base16/dracula.css";
import { Container } from "@mui/system";
import AuthGuard from "../components/routecomponents/AuthGuard";
import { NextPage } from "next";
import RoutesWrapper from "../components/routecomponents/RoutesWrapper";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requiredAuth?: boolean;
};

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props;

  return (
    <Provider store={store}>
      <RoutesWrapper {...pageProps}>
        <link rel="shortcut icon" href="/favicon.ico" />
        <Grid container>
          <SideDrawer />
          <Grid item sx={{ display: "flex", margin: "0 auto" }} xs={10}>
            <Grid
              sx={{display: "flex",flexDirection: "column",margin: "0 auto",}} item xs={9}>
             
              <ToastContainer theme="colored" position="top-right" />
             
              <Container sx={{ marginTop: 10 }}>
                {Component.requiredAuth ? (
                  <AuthGuard>
                    <Component {...pageProps} />
                  </AuthGuard>
                ) : (
                  <Component {...pageProps} />
                )}
              </Container>
              
            </Grid>
          </Grid>
        </Grid>
      </RoutesWrapper>
    </Provider>
  );
}

export default MyApp;
