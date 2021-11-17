import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = (props) => {
  const productId = props.match.params.id
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchInfo()
    console.log('info', userInfo);
  }, [productId, userInfo]);

  const fetchInfo = () => {
    const options = {
      method: 'GET',
      url: 'https://tiktok33.p.rapidapi.com/user/info/kikakiim',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'a003991dbamsh0d9de7986dee0b9p13af55jsna2951ace765d'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setUserInfo(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div>
      {
        userInfo ? <h1>{productId}</h1> : <h1>LOADING</h1>
      }

    </div>
  )
}

export default User