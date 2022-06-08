import React from "react";

import "./Skills.css";

const skills = [
  {
    id: "a1",
    title: "Application Development",
    image: "./Image/image3.png",
  },
  {
    id: "a2",
    title: "Intelligent Inventory Solutions ",
    image: "./Image/image4.png",
  },
  {
    id: "a3",
    title: "Customer Database Intelligence",
    image: "./Image/image 5.png",
  },
];

export default function () {
  return (
    <div>
      <div className="container background4">
        <div className="text-lg text-newgreen  ml-2">
          03
          <span className="text-white text-6xl ml-4">My Skills</span>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="grid grid-cols-3 gap-3">
          {skills.map((data, index) => (
            <div className=" mx-auto">
              <img
                className="border-1 rounded-md w-[400px] h-[300px] ml-5"
                src={data.image}
              ></img>

              <p className="text-bold text-white ml-6 ">{data.title} </p>
            </div>
          ))}
        </div>

        <br></br>
<br></br>
<br></br>
<br></br>

<div className='text-white ml-9'>↓ Industries</div>
      </div>
    </div>
  );
}
