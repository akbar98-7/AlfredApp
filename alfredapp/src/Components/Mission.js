import React from 'react'
import "./Mission.css";




const mission = [
    
        {
          id: "e1",
          title: "FOR ENTERPRISES",
          subtitle: "I create business solutions and optimization through machine learning and smart data science. I build applications that allow institutions to integrate their decision-making, operations, and data into flexible and scalable AI solutions, achieveing cost-efficency and speed that far outpaces alternative approaches."
        },
        {
          id: "e2",
          title: "FOR CUSTOMERS",
          subtitle: "Hello, my name is Alfred. I figure out which products your customers love and predict what they want next. Through machine learning and smart data science, I build a synaptic network based on customers' historical interactions and touch-points. This interconnected data allows me to build a customer profile and provide an optimal, personalized service. My creators built me so that any operators can leverage my tools through an intuitive interface, customized to their business. I minimize the need for overhead costs by automating daily, mundane tasks and optimizing complex decisions. "
        },
        
      ];


export default function Mission() {
  return (
    <div>


        <div className='container background3'>

        


            <div className='text-lg text-newgreen  ml-2'>01
            <span className='text-white text-6xl ml-4'>My Mission</span>
            </div>

            <br></br>
            <br></br>

            <div class="grid grid-cols-2 gap-1 mx-10 ">

            {mission.map((data, index) => (



            <div class="border-1 rounded-xl h-[279px] w-[610px] ml-4 bg-neutral-500 ">
                <br></br>
                <br></br>
            
                <div className='text-base text-newgreen ml-5 '>{data.title}</div>
                <div className='text-base text-white ml-5 mt-2'>{data.subtitle}</div>

</div>
            ))}
</div>

<br></br>
<br></br>
<br></br>
<br></br>

<div className='text-white ml-9'>↓ My Strategy</div>


        </div>




    </div>
  )
}
