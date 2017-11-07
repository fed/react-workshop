// @flow
import React from 'react';

type Picture = {
  url: string,
  image: string,
  location: string
};

type User = {
  name: string,
  url: string,
  avatar: string
};

type Props = {
  post: Picture,
  user: User,
  likes: number
};

export default function Entry({ post, user, likes }: Props) {
  return (
    <article>
      <p>{likes} likes</p>
    </article>
  );
}
