import React, { useContext } from 'react'
import styled from 'styled-components'
import { SiteContext } from '../context/siteContext'
import Post from '../components/Post'

const Home = () => {
  const { site } = useContext(SiteContext)

  console.log('site', site)

  const posts = site.map(elem =>
    <Post
      key={elem.id}
      data={elem}
    ></Post>
  )

  return (
    <HomeWrapper>
      {posts}
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
`;

export default Home