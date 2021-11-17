import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Head = (props) => {

  console.log('{props', props);

  return (
    <HeadWrapper>
      <NavLink
        className="post-header"
        to={`/user/${props.id}`}
      >
        <img src={props.avatar} alt="" className="avatar" />
        {props.nickName}
      </NavLink>
    </HeadWrapper>
  )
}

const HeadWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  max-width: 300px;
  .post-header {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #424242;
    font-weight: 700;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 0 15px 0 10px;
  }
`;

export default Head