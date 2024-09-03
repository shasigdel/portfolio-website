import React from 'react'

const Title = ({title}) => {

  return (
    <div>  
      <div className='font-titleFont py-20'>
        <h1 className="my-2 text-center text-4xl capitalize">{title}</h1>
      </div>
    </div>
  )
}

export default Title
