import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { setLogIn } from "../../features/accountSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function AuthGuard({children}: {children: JSX.Element}) {
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector((state) => state.account);
  const router = useRouter();

    console.log("AUTH", process.env.NEXT_PUBLIC_JWT!)

    useEffect(() => {
        checkToken()
    }, [])

    const checkToken = async () => {
        let tkn;
        if (typeof window !== "undefined") {
            tkn = localStorage.getItem(process.env.NEXT_PUBLIC_JWT!)
        }
        if (!tkn) {
            console.log("No token", tkn);
            router.push("/auth/login");
            return;
        }
        if (JSON.parse(tkn).token) {
            console.log("we good");
            dispatch(setLogIn(true))
        }
    }

  return loggedIn == true ? <>{children}</> : null;
}
