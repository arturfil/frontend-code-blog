import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from '../../pages/images/binary.jpg';

interface Props {
    data: {
        image?: string,
        title: string,
        category: string,
        author: string
    }
}

export default function CardContainer({data}: Props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <Image src={image} />
      <CardContent>
        <Typography sx={{inlineSize: '150px', overflow: "hidden"}}  variant="h6" >
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{data.author}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
