import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown'

const Textarea = () => {
    const[data,setData]=useState('# hello')
  return (
    <>
    <h3>click here for<a href='https://www.markdownguide.org/cheat-sheet/' style={{color:'green'}}> cheat sheet</a></h3>
     <div className='main'>
        <textarea onChange={(e)=>setData(e.target.value)} value={data}></textarea>
        <article> <ReactMarkdown>{data}</ReactMarkdown></article>
    </div>
    </>
   
  )
}

export default Textarea