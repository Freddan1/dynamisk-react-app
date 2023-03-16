import React from 'react'

const Form = (props) => {
  return (
    <div>
        <form action="">
            <input type="text" onChange ={props.onChange} value ={props.value} />
            <button onClick={props.onClick}>Search</button>
        </form>
    </div>
  )
}

export default Form