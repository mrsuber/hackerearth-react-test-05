
import './Homepage.css'
import {Cart,Nav} from '../../components'
import {Link} from 'react-router-dom'

const Homepage = ({setPublisherName,newsData}) => {



  return (
    <>
    <Nav/>
    <div className="home__wrapper">
      <div className="display__publisher_as_button_left">
        <Cart />
      </div>


    </div>
    </>
  )
}

export default Homepage
