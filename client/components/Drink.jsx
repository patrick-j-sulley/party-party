import React from 'react'
import { connect } from 'react-redux'

const Drink = ({ }) => {
  return (
    <div>
      <div className="row align-items-start">
        <div className="col">
        </div>
        <div className="col">
          <div className="card">
            <img src="https://cocktailpartyapp.com/wp-content/uploads/Halekulani.png" className="card-img-top" alt="Cartoon cocktail colored orange with a pink flower. It might be a Tequlia Sunrise" />
            <div className="card-body">
              <h5 className="card-title">Tequlia Sunrise</h5>
              <li className="card-text">Orange Juice</li>
              <li className="card-text">Tequila</li>
              <li className="card-text">Grenadine</li>
            </div>
          </div>
        </div>
        <div className="col">
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = () => ({})

// export default connect(mapStateToProps)(Drink)
export default Drink