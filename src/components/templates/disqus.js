import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostTemplate = (props) => {
  let disqusConfig = {
    url: props.Url,
    identifier: props.PostId,
    title: props.PostTitle,
  }
  return (
    <>
      <h1>{props.postTitle}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate