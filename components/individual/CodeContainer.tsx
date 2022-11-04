import { Button, Grid, Typography } from '@mui/material';
import highlight from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
// import python from 'highlight.js/lib/languages/python'
import Link from 'next/link';

highlight.registerLanguage('typescript', typescript);
// highlight.registerLanguage('python', python);

import React, { createRef, useEffect } from 'react'
import { Post } from '../../interfaces/Post';
import { useAppSelector } from '../../store/hooks';

interface Props {
    post: Post;
}

function CodeContainer({post}: Props) {
    const {loggedIn} = useAppSelector(state => state.account);

    useEffect(() => {
        highlight.initHighlighting();
    }, []);

  return (
    <Grid className="code-container shadow">
        <Link href={`/posts/${post.id}`} style={{cursor: "pointer"}}>
            <Typography sx={{cursor: "pointer"}} variant="h6" fontWeight={600}>{post.title}</Typography>
        </Link>
        <pre >
            <code
                style={{borderRadius: "12px", whiteSpace: "-moz-pre-wrap", }}
            >
                {post.content}
            </code>
        </pre>
        <Grid item xs={6}>
            <p>Wrote by {post.author}</p>
        </Grid>
        {loggedIn ? (
            <Grid item xs={6}>
                <Link href={`/posts/editPost/${post.id}`}>
                    <Button>Edit</Button>
                </Link>
            </Grid>
        ) : null}
    </Grid>
  )
}

export default CodeContainer