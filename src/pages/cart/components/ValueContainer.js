import React from 'react'

const ValueContainer = ({title, value, isBold}) => {
  return (
    <div className="d-flex justify-space-bw p-t-10">
      {isBold ? <h3>{title}</h3> : <p>{title}</p> }
        <span><i className="fa fa-inr" aria-hidden="true"></i> {value}</span> 
    </div>
  )
}

export default ValueContainer