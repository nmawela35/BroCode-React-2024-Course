import profilePic from './assets/pexels-cottonbro-6943429.jpg'

function Card() {
  return (
    <div className='card'>
        <img className='cardImage' src={profilePic} alt="" />
        <h2 className='card-title'>Chris Mawela</h2>
        <p className='card-text'>Develop applications</p>
    </div>
  )
}

export default Card