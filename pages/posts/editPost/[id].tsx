import { Typography, Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect, useState } from "react";
import { getSinglePost, updatePost } from "../../../features/postSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export default function EditPost() {
  const dispatch = useAppDispatch();
  const { singlePost } = useAppSelector((state) => state.post);
  const router = useRouter();
  const id = router.query["id"];
  
  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [id, dispatch]);

  useEffect(() => {
    setPostInitialState();
  },[singlePost])

  const setPostInitialState = () => {
    if (!singlePost) return
    setPost({
        id: singlePost.id!,
        title: singlePost.title,
        author: singlePost.author,
        content: singlePost.content,
        category: singlePost.category,
    })
  }
  
  
  
  const [post, setPost] = useState({
    id: "",
    title: "",
    author: "",
    content: "",
    category: "",
  });


  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(updatePost(post))
  }

  return (
    <>
      <Typography fontWeight={600} variant="h4">
        Edit Post
      </Typography>
      <Grid className="form shadow" item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">{post.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              fullWidth
              label="Title"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Author"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Category"
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              minRows={5}
              fullWidth
              multiline={true}
              label="Content"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              sx={{ textTransform: "capitalize" }}
              onClick={handleSubmit}
              className="button"
              fullWidth
              variant="contained"
              disableElevation
            >
              Update Post
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
