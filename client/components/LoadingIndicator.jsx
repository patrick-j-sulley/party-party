import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const LoadingIndicator = ({ }) => {
  const possibleGifs = [
    'https://i.giphy.com/media/WocwafmqiunUM1wfq9/giphy.webp',
    'https://i.giphy.com/media/jtc9gjTHVfvUdmeKGi/giphy.webp',
    'https://i.giphy.com/media/d90nFNtgGnvjiGBN4Z/giphy.webp',
    'https://c.tenor.com/6GIjj7POY8oAAAAM/shake-mixen.gif',
    'https://c.tenor.com/5Kwmk67tEpQAAAAd/cocktail-shaker.gif',
    'https://c.tenor.com/bNlTuq3EE18AAAAC/ted-shake.gif'
  ]

  const possibleMsgs = [
    'Shaking dem drinks...',
    'Shaky shake shake...',
    'Choppin up lemons...',
    'Getting a new bag of ice...',
    'Getting the salt...',
    'Lookin pretty...'
  ]

  const getRandomFrom = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  let randomGif = getRandomFrom(possibleGifs)
  let randomMsg = getRandomFrom(possibleMsgs)

  useEffect(() => {
    console.log(randomMsg)
    setTimeout(() => {
      randomMsg = getRandomFrom(possibleMsgs)
    }, 1000)
  })

  return (
    <>
      <div className="row align-items-center">
        <div className="col">
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div class="text-center">
                <img className='loadinggif m-3 border' src={randomGif} />
                <p className="loadingtext">{randomMsg}</p>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
        </div>
      </div>
    </>
  )
}

// const mapStateToProps = () => ({})

// export default connect(mapStateToProps)(LoadingIndicator)
export default LoadingIndicator
