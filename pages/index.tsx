import { Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CodeContainer from "../components/individual/CodeContainer";
import { getAllPosts } from "../features/postSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Typography variant="h4" fontWeight={600} marginBottom={5}>
        Posts - Updated
      </Typography>
      {posts && posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Grid className="container-card shadow">
                <Typography variant="h6" fontWeight={500}>{post.title}</Typography>
                <Typography>#{post.category}</Typography>
                <Typography>By <strong>{post.author}</strong></Typography>
              </Grid>
            </Link>
          </div>
        ))}
    </>
  );
};

export default Home;
