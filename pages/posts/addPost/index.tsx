import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { createPost } from "../../../features/postSlice";
import { useAppDispatch } from "../../../store/hooks";

function AddPost() {
  const dispatch = useAppDispatch();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(createPost(post));
    setPost({
      title: "",
      author: "",
      content: "",
      category: "",
    })
  }

  return (
    <>
      <Typography fontWeight={600} variant="h4">
        Add Post
      </Typography>
      <Grid className="form" item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Post</Typography>
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
              sx={{textTransform: 'capitalize'}}
              onClick={handleSubmit}
              className="button"
              fullWidth
              variant="contained"
              disableElevation
            >
              Add Post
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}

AddPost.requiredAuh = true;
export default AddPost;