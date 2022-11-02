import { Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CardContainer from "../components/individual/CardContainer";
import CodeContainer from "../components/individual/CodeContainer";
import { getAllPosts } from "../features/postSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import image from "./images/image2.png";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Typography
        style={{ display: "inline-block", transform: "scale(1, 1.1)"}}
        variant="h3"
        fontWeight={550}
        marginBottom={5}
      >
        Posts
      </Typography>
      <Grid container spacing={3}>
        {posts &&
          posts.map((post) => (
            <Grid mt={2} xs={12} sm={6} md={4} lg={3} key={post.id}>
              <Link href={`/posts/${post.id}`}>
                  <Grid className="container-card shadow">
                    <Image className="card-image" src={image} width={400} height={300} />
                    <Grid sx={{padding: "0 20px"}}>
                      <Typography sx={{overflow: "hidden" ,textOverflow: "ellipsis", whiteSpace: "nowrap"}} fontWeight={600}>
                        {post.title}
                      </Typography>
                      <Typography>#{post.category}</Typography>
                      <Typography>
                        By <strong>{post.author}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
