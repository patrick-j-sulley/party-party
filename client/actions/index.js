import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_COCKTAIL = 'RECEIVE_COCKTAIL'
export const REQUEST_COCKTAIL = 'REQUEST_COCKTAIL'

export function requestCocktail() {
  return {
    type: REQUEST_COCKTAIL,
  }
}

export function receiveCocktail(cocktail) {
  console.log(cocktail)
  return {
    type: RECEIVE_COCKTAIL,
    cocktail: cocktail.drinks,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function fetchCocktail(ingredient) {
  // console.log(query)
  //return the dispatch callback
  return dispatch => {
    dispatch(requestCocktail()) //what role does this play?
    return request
      .get(`/api/v1/cocktail/query/${ingredient}`)
      .then(res => {
        dispatch(receiveCocktail(res.body))
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
