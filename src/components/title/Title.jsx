import React from 'react'
import './Title.css'

const Title = ({ id, subTitle, title }) => {
  return (
    <div id={id} className='title'>
        {subTitle && <p className='subtitle'>{subTitle}</p>}
        <h2>{title}</h2>
    </div>
  )
}

export default Title
