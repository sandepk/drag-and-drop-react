import React from 'react'
import { forwardRef } from 'react'
const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div ref={ref} className='note__container' style = {{ top: `${initialPos?.y}px`, left: `${initialPos?.x}px` }} {...props}>
      📌 {content}
    </div>
  )
})

export default Note
