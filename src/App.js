import React from 'react'
import Profile from './profile/Profile'
import './App.css'

function App() {
  const handleName=(name)=> alert(name)
  return (
    <div className="container">
      <Profile  fullName={"LeBron James"}
                bio={'James has three children with Savannah Brinson (born August 27, 1986),his high school sweetheart: Bronny,[328] Bryce Maximus, and Zhuri Nova.[329] James proposed to Brinson on December 31, 2011,[330] and the two were married on September 14, 2013, in San Diego, California.'}
                profession={'BasketBall Player'}
                handle={handleName}

      
      >
        <img style={{ width:"50%" ,padding:"10px"}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lebron_wizards_2017_%28cropped%29.jpg/800px-Lebron_wizards_2017_%28cropped%29.jpg"  />
      </Profile>  
    </div>
  )
}

export default App
