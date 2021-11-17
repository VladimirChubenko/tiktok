import { useEffect, useReducer } from 'react'
import { siteReducer } from './siteReducer'
import { SiteContext } from './siteContext'
import { SET_LOADING, UNSET_LOADING, SET_SITE_INFO } from './types'
import axios from 'axios'

const initialState = {
  site: null,
  isLoading: false
}

export const SiteState = ({ children }) => {
  const [state, dispatch] = useReducer(siteReducer, initialState)
  const showLoader = () => dispatch({ type: SET_LOADING })
  const hideLoader = () => dispatch({ type: UNSET_LOADING })

  const fetchData = () => {
    showLoader()
    const options = {
      method: 'GET',
      url: 'https://tiktok33.p.rapidapi.com/trending/feed',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'a003991dbamsh0d9de7986dee0b9p13af55jsna2951ace765d'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      dispatch({
        type: SET_SITE_INFO,
        payload: response.data
      })
    }).catch(function (error) {
      console.error(error);
    });
    hideLoader()
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const { site, isLoading } = state

  return (
    <SiteContext.Provider value={{ site, isLoading }}>
      {children}
    </SiteContext.Provider>
  )
}
