import { SET_LOADING, UNSET_LOADING, SET_SITE_INFO } from './types'

const handlers = {
  [SET_LOADING]: state => ({
    ...state,
    isLoading: true
  }),
  [UNSET_LOADING]: state => ({
    ...state,
    isLoading: false
  }),
  [SET_SITE_INFO]: (state, { payload }) => ({
    ...state,
    site: payload
  }),
  DEFAULT: state => state,
}

export const siteReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT

  return handle(state, action)
}