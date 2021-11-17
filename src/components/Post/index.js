import React from 'react'
import styled from 'styled-components'
import Head from './head'
import Body from './body'

const Post = (props) => {

  return (
    <PostWrapper>
      <Head
        id={props.data.authorMeta.name}
        nickName={props.data.authorMeta.nickName}
        avatar={props.data.authorMeta.avatar}
      />
      <Body
        url={props.data.videoUrl}
        text={props.data.text}
        likes={props.data.diggCount}
        comments={props.data.commentCount}
        hashtags={props.data.hashtags}
      />
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 25px 0;
  padding: 10px 0 25px;
  max-width: 650px;
  margin: 0 auto;
  border-bottom: 1px solid #dddddd;
`;

export default Post