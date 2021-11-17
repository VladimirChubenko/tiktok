import React from 'react'
import styled from 'styled-components'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'

function normalizeStats(stat) {
  const length = stat.toString().length
  if (length > 6) {
    return `${(stat * 0.000001).toFixed(1)} M`
  } else if (length > 4) {
    return `${(stat * 0.001).toFixed(1)} K`
  } else {
    return stat
  }
}


const Body = (props) => {
  return (
    <BodyWrapper>
      <p>{props.text}</p>
      <video width="285" height="509" controls>
        <source src={props.url} type="video/mp4" />
      </video>
      <div className="statistic">
        <div className="statistic-elem">
          <img src={like} alt="" />
          <p>{normalizeStats(props.likes)}</p>
        </div>
        <div className="statistic-elem">
          <img src={comment} alt="" />
          <p>{normalizeStats(props.comments)}</p>
        </div>
      </div>
    </BodyWrapper>
  )
}

const BodyWrapper = styled.div`
  width: 100%;
  max-width: 285px;
  position: relative;
  video {
    width: 100%;
    max-width: 285px;
  }
  p {
    margin: 5px 0 10px;
    text-align: left;
    font-weight: 600;
  }
  .statistic {
    position: absolute;
    bottom: 30px;
    right: -6
    0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    &-elem {
      margin-bottom: 10px;
      img {
        background-color: #1618230f;
        padding: 10px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: #1618231a;
        }
      }
      p {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
      }
    }
  }
`;

export default Body