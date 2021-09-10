import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Drink = ({ drinksArr }) => {
  const [drinkName, setDrinkName] = useState('loading...')
  const [alcoholicCheck, setAlcoholicCheck] = useState('loading...')
  const [image, setImage] = useState('https://cocktailpartyapp.com/wp-content/uploads/Halekulani.png')
  //strGlass
  //strIngredient1
  //strIngredient2

  useEffect(() => {
    if (drinksArr.length > 0) {
      setDrinkName(drinksArr[0].strDrink)
      setAlcoholicCheck(drinksArr[0].strAlcoholic)
      setImage(drinksArr[0].strDrinkThumb)
    }
  }, [drinksArr])

  return (
    <>
      <div className="row align-items-start">
        <div className="col">
        </div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{drinkName}</h5>
              <p><i>{alcoholicCheck}</i></p>
            </div>
            </div>
          </div>
        <div className="col">
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    drinksArr: state.cocktails
  }
}

export default connect(mapStateToProps)(Drink)