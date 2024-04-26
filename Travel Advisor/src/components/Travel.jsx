import React from 'react'
import './Travel.css'

const Travel = () => {
    return (
     <>
     <div className="travel">
            <div>
                <h1>We always try to give you <br />the best service</h1>
                <h4>We always try to make our customer Happy. We provide all kind of <br />
                    facilities. Your Satisfaction is our main priority.</h4>
            </div>

            <div  className='foto'>
                <div className='foto1'>
                <img src="src\assets\simple-line-icons_calender.png" alt="" /> 
                <h2>15+</h2><p>Years Of <br />Experience</p>
                </div>

                <div>
                    <img src="src\assets\Vector.png" alt="" />
                    <h2>15K+</h2><p>Happy Travellers</p> 
                </div>

                <div>
                    <img src="src\assets\carbon_map.png" alt="" />
                    <h2>650+</h2><p>Place Visited</p>
                </div>

                <div>
                    <img src="src\assets\gridicons_history.png" alt="" />
                    <h2>2K+</h2><p>Travel History</p>
                </div>
                
            
            </div>
        </div>
     </>
         
    )
}

export default Travel
