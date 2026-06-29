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
          console.log(copytask)
            setTask(copytask)

    }
    const detailedHanler=(e)=>{
        setDetailed(e.target.value)
        // console.log(detailed)
    }
    const deleteNote=(key)=>{
        const copytask=[...task]
        copytask.splice(key,1)
        setTask(copytask)
    }
    return (
        <div className="min-h-scree{prop.id}n bg-slate-950 px-4 py-8 text-slate-100">
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/30">
                <form onSubmit={(eventobj)=>{
                    submitHandler(eventobj)
                }} className="space-y-4">
                    <h1 className="text-2xl font-semibold">Add Note</h1>
                    <input value={title} placeholder='Enter your Heading' type=''onChange={(e)=>{
                        setTitle(e.target.value)
                        console.log(title)
                    }} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none ring-0 focus:border-indigo-500" />
                    <textarea onChange={detailedHanler} value={detailed} type='text' placeholder='Write Details here' className="min-h-32 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                    <button className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500">Add note</button>
                </form>
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <h1 className="text-xl font-semibold">Recent note</h1>
                    <div className="mt-3 space-y-2">
                        {
                            task.map(function(prop,key){
                                return <div key={prop.id} className="rounded-lg bg-slate-800/80 p-3 text-sm text-slate-300">
                                    <h3> {key+1}-{prop.title}</h3>
                                    <p>{prop.detailed}</p>
                                    <button
                                        onClick={() => {
                                            deleteNote(key)
                                        }}
                                        className="mt-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
                                    >
                                        Delete
                                    </button>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App