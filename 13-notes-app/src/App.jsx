import { useState } from 'react'
const App=()=>{
    const[title,setTitle]=useState('')
    const[detailed,setDetailed]=useState('')
    const[task,setTask]=useState([])
    const submitHandler=(obj)=>{
        obj.preventDefault()
        console.log('form submited')
         setTitle('')
         setDetailed('')
          console.log(title,detailed)
          const copytask=[...task]
          copytask.push({title,detailed})
        //   console.log(copytask)
        

    }
    const detailedHanler=(e)=>{
        setDetailed(e.target.value)
        // console.log(detailed)
    }
    return (
        <div>
            <form onSubmit={(eventobj)=>{
                submitHandler(eventobj)
            }}>
                <h1>Add Note</h1>
                <input value={title} placeholder='Enter your Heading' type=''onChange={(e)=>{
                    setTitle(e.target.value)
                    console.log(title)
                }} />
                <textarea onChange={detailedHanler} value={detailed} type='text' placeholder='Write Details here'/>
                <button >Add note</button>
            </form>
            <div>
                <h1>Recent note</h1>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default App