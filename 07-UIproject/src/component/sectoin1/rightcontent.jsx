import React from "react";
import RightCard from "./Rightcard";
const rightcontent = (props) => {
    console.log(props.users)
  return (
    <div id="right" className=" h-full w-2/3 flex gap-10 flex-nowrap overflow-x-auto">
        {Array.isArray(props.users) && props.users.map((user, idx) => (
            <RightCard key={idx} img={user.img} tag={user.tag} idx={idx} />
        ))}
    </div>
  )
}

export default rightcontentcd