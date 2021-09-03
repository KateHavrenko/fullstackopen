import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      The name of course is {props.name}
    </div>
  )
}

export default Header