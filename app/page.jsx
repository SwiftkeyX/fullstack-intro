'use client'

import Link from 'next/link';
import Post from './components/Post';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts-fetch');
      const data = await res.json();
      setPosts(data);
    }
    
    fetchPosts();
  }, []);

  return (
    <main className={styles.main}>
      <Link href={'/add-post'}>Add Post</Link>
      <h1>Feed</h1>
      {
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        ))
      }
    </main>
  );
}