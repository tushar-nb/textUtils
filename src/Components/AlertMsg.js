import React from 'react'

export default function AlertMsg(props) {
  return (                     //or can also enclose in a div and give some height in style.
    props.Alert && <div style={{position:"fixed" , width:"100vw"}} className="alert alert-success  "  role="alert"  >
         {props.Alert.msg}
    </div>
  )
}



