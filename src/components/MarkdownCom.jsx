import React, { useState } from 'react'

import ReactMarkdown from 'react-markdown'

import "./MarkdownCom.css"

const MarkdownCom = () => {
  
  const [markDown, setMarkdown] = useState();

  return (
    <>
      <div className="container">
        <textarea value={markDown} onChange={(e) => setMarkdown(e.target.value)} className="text-area"></textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default MarkdownCom 
