import React from "react";
import './Header.css';
import Mission from "./Mission";




export default function Header  ()  {
  return (
      <div>
  <div className="background1">

  <nav className="ml-1 border-gray-200 px-2 flex flex-wrap ">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    <a href="#" className="flex">
      <img src="./Image/AI.png" className="mt-3 ml-4"></img>
        
    </a>
    <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
      <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium ">
        <li>
          <a href="#" className="bg-newgreen md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-newgreen md:p-0 rounded" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-newgreen md:p-0">Mission</a>
        </li>
        <li>
          <a href="#" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-newgreen md:p-0">Strategy</a>
        </li>
        <li>
          <a href="#" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-newgreen md:p-0">Skills</a>
        </li>
        <li>
          <a href="#" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-newgreen md:p-0">Industries</a>
        </li>
        <li>
          <a href="#" className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-newgreen md:p-0">Contact</a>
        </li>
      </ul>
    </div>
    <button class="bg-newgreen hover:bg-newblue text-black font-bold py-2 px-4 rounded mt-3 mr-3">
  CONTACT US
</button>
  </div>
  
</nav>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div className='text-7xl text-white flex justify-center '>Hello... my name is Alfred.

</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div className="flex justify-center">
<div class="border-2 rounded-full h-12 w-12 ">
<img className=" mt-3 p-2 ml-1" src="./Image/arrow.svg" />
</div>



</div>


















    </div>
    
    </div>
  );
};

