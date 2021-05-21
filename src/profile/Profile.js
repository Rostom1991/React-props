import React from 'react'
import PropTypes from 'prop-types';

function Profile(props) {
    return (
        <div>
            {props.children}
            <h1 style={{color:"brown"}}>{props.fullName}</h1>
            <p>{props.bio}</p>
            <h3>{props.profession}</h3>
            <button onClick={()=>props.handle(props.fullName)}>Alert</button>
            
        </div>
    )
}
Profile.defaultProps = { fullName: "Ball Player Name", bio: "nothing", profession: "player" }

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,


    
}
export default Profile
