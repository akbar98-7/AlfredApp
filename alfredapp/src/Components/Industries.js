import React from 'react'

import "./Industries.css";


const industries = [
    {
      id: "a1",
      title: "Retail",
      image: "./Image/finance.png",
    },
    {
      id: "a2",
      title: "Media",
      image: "./Image/finance.png",
    },
    {
      id: "a3",
      title: "Wellness",
      image: "./Image/finance.png",
    },
    {
        id: "a4",
        title: "Finance",
        image: "./Image/finance.png",
      },
      {
        id: "a5",
        title: "Manufacturing",
        image: "./Image/finance.png",
      },
      
  ];





export default function Industries() {
  return (
    <div>
        
        <div className="container background5">


        <div className="text-lg text-newgreen  ml-2">
          04
          <span className="text-white text-6xl ml-4">Industries</span>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="grid grid-cols-5 gap-4  ">
          {industries.map((data, index) => (
            <div className="">
              <img
                className="border-1 rounded-md w-[300px] h-[300px] "
                src={data.image}
              ></img>

              <p className="text-bold text-black ml-6 ">{data.title} </p>
            </div>
          ))}
        </div>









        <br></br>
<br></br>
<br></br>
<br></br>

<div className='text-white ml-9'>↓ Contact</div>


        </div>




    </div>
  )
}
