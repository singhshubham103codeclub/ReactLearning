import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './rightcontent'
const Page1Contwnt = (props) => {
    console.log(props.users)
  return (
    <div className="py-10 flex items-center h-[90vh] px-18 gap-5">
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1Contwnt