import React, {useState} from 'react'

function main() {

const [button, setButton] = useState({
    buttons:{
button1:"",
button2:"",
button3:"",
button4:"",
}
})
const createButtons = () => {
    return (
      <div className="buttons">
        {button.map((buttons) => (
          <button onClick = {(e) => handleClick(e)}> {buttons} </button>
        ))}
      </div>
    );
  };


  
    return (
        <div>
             {createButtons()}

        </div>
    )
}

export default main
