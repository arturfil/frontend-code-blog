import { Typography, Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { MouseEvent, useState } from "react";
import { loginUser } from "../../features/accountSlice";
import { useAppDispatch } from "../../store/hooks";

export default function Login() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useRouter();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser({
      email: "",
      password: "",
    });
    navigate.push("/");
  }

  return (
    <>
      <Typography variant="h4" fontWeight={550}>
        Log In
      </Typography>
      <Grid className="form shadow" item xs={12}>
        <Grid container spacing={3}>
       
          <Grid item xs={12}>
            <TextField
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              fullWidth
              label="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              value={user.password}
              onChange={e => setUser({...user, password: e.target.value})}
              fullWidth 
              label="password" 
              type="password" 
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={handleSubmit} className="button" fullWidth variant="contained">
              Log In
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}
