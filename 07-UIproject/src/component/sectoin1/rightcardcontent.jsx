import React from "react";
const RightCardContent = (props) => {
    return (
         <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
                <h2 className="bg-white text-2xl font-bold rounded-full flex justify-center items-center w-12 h-12">{props.index != null ? props.index + 1 : ''}</h2>
                <div>
                <p className="text-lg leading-normal mb-10 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus dolorem tenetur quidem veritatis quas?</p>
                <div>
                    <button className="bg-blue-600 text-white font-medium px-8 py-4 rounded-full">{props.tag}</button>
                    <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
            </div>
    )
}
export default RightCardContent;