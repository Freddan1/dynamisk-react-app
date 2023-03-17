import React from 'react'

const Form = (post) => {
  return (
    <div>
        <form>
            <input type="text" onChange ={post.onChange} value ={post.value} />
            <button onClick={post.onClick}>Search</button>
        </form>
    </div>
  )
}

export default Form