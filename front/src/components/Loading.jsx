import React from 'react';
import Entrance from '../images/Entrance.svg'

class Loading extends React.Component {
    render() { 
        return (
            <div>
                <img src={Entrance}/>
            </div>
          )
    }
}
 
export default Loading;