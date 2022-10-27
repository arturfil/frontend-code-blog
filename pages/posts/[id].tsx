import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CodeContainer from "../../components/individual/CodeContainer";
import { clearSinglePost, getSinglePost } from "../../features/postSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function SinglePost() {
  const dispatch = useAppDispatch();
  const { singlePost } = useAppSelector((state) => state.post);
  const router = useRouter();
  const id = router.query["id"];

  useEffect(() => {
    dispatch(getSinglePost(id));
    return () => {
        dispatch(clearSinglePost)
    };
  }, []);

  return (
    <> 
        <Typography marginBottom={3} fontWeight={600} variant="h4">{singlePost?.title}</Typography>
        {singlePost ? <CodeContainer post={singlePost} /> : null}
    </>
  );
}

export default SinglePost;
