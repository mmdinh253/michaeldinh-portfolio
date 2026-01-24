import React from 'react'
import resume from '../../files/resume.pdf'

const Resume = () => {
  return (
    <div className='resume'>
        <iframe 
            src={resume} 
            title="Resume"
            width='100%'
            height='800px'
            style={{border: 'none'}}
            frameborder="0"
        />
    </div>
  )
}

export default Resume
