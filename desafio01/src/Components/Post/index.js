import React from 'react';

import PostHeader from './PostHeader';
import './Post.scss';

const Post = (props) => {
  const posts = props.data;

  return posts.map(post => (
    <div className="container-post" key={post.id}>
      <PostHeader avatar={post.avatar} nome={post.nome} tempo={post.tempo} />
      <div className="divider" />
      <span>{post.informacao}</span>
    </div>
  ));
};

export default Post;
