import { useState } from 'react'
const App=()=>{
    // title holds the heading text entered by the user
    const[title,setTitle]=useState('')
    // detailed holds the note body entered by the user
    const[detailed,setDetailed]=useState('')
    // task stores all note objects added to the app
    const[task,setTask]=useState([])
    const submitHandler=(obj)=>{
        obj.preventDefault()
        // prevent form submission from refreshing the page

        console.log('form submited')
        // debug log to confirm submit handler runs

         setTitle('')
         // clear title input after submit

         setDetailed('')
         // clear detail textarea after submit

          console.log(title,detailed)
          // debug log the values that were added

          const copytask=[...task]
          // copy current notes array before updating

          copytask.push({title,detailed})
          // add the new note to the copy

          console.log(copytask)
          // debug log the updated notes list

            setTask(copytask)
            // update state to show the new note

    }
    const detailedHanler=(e)=>{
        setDetailed(e.target.value)
        // update detailed state when textarea changes
    }
    const deleteNote=(key)=>{
        const copytask=[...task]
        // copy current notes array before removing one item

        copytask.splice(key,1)
        // remove the note at the selected index

        setTask(copytask)
        // update the task list after deletion
    }
    return (
        <div className="min-h-scree{prop.id}n bg-slate-950 px-4 py-8 text-slate-100">
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/30">
                <form onSubmit={(eventobj)=>{
                    submitHandler(eventobj)
                }} className="space-y-4">
                    {/* form for adding a note */}
                    <h1 className="text-2xl font-semibold">Add Note</h1>
                    <input value={title} placeholder='Enter your Heading' type=''onChange={(e)=>{
                        setTitle(e.target.value)
                        console.log(title)
                    }} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none ring-0 focus:border-indigo-500" />
                    {/* title input updates title state */}
                    <textarea onChange={detailedHanler} value={detailed} type='text' placeholder='Write Details here' className="min-h-32 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:border-indigo-500" />
                    {/* textarea updates detailed state */}
                    <button className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500">Add note</button>
                </form>
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <h1 className="text-xl font-semibold">Recent note</h1>
                    <div className="mt-3 space-y-2">
                        {/* render each saved note */}
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