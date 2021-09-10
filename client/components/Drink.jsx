import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Drink = ({ drinksArr }) => {
  const [drinkName, setDrinkName] = useState(
    'The Mixologist catches your eye as you approach the bar.'
  )
  const [alcoholicCheck, setAlcoholicCheck] = useState(
    'Listening to the yelling over the sound of the jazz bass solo, you hear the question for the second time:'
  )
  const [image, setImage] = useState('./bartender.png')

  const [idx, setChangeDrink] = useState(0)

  let numerator = idx
  let num = 0
  const drinkHandler = () => {
    if (numerator >= drinksArr.length - 1) {
      console.log(num, numerator, 'EHEH')
      num = 0
    } else {
      num = numerator += 1
    }
    setChangeDrink(num)
  }


  //strGlass
  //strIngredient1
  //strIngredient2

  //you walk up to the bar
  //you try to catch the bartender's eye
  //you wait until they serve you
  //you then ask for your drink

  //The Mixologist catches your eye as you approach the bar.
  //Yelling over the sound of the jazz bass solo you hear the question:

  useEffect(() => {
    if (drinksArr.length > 0) {
      setDrinkName(drinksArr[idx].strDrink)
      setAlcoholicCheck(drinksArr[idx].strAlcoholic)
      setImage(drinksArr[idx].strDrinkThumb)
    }
  }, [drinksArr, idx])

  return (
    <>
      <div className="row align-items-start">
        <div className="col"></div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" onClick={drinkHandler} />
            <div className="card-body">
              <h5 className="card-title">{drinkName}</h5>

              <p>
                <i>{alcoholicCheck}</i>
              </p>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    drinksArr: state.cocktails,
  }
}

export default connect(mapStateToProps)(Drink)
