import React, { useEffect } from "react";
import { setLogIn } from "../../features/accountSlice";
import { useAppDispatch } from "../../store/hooks";

export default function RoutesWrapper({ children }: { children: JSX.Element }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tkn = localStorage.getItem(process.env.NEXT_PUBLIC_JWT!);
    if (!tkn) return;
    if (JSON.parse(tkn).token) {
        dispatch(setLogIn(true));
        // dispatch(getUserByToken())
    }
  }, []);

  return <>{children}</>
}
