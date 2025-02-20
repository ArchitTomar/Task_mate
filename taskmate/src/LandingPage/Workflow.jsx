import React from 'react';
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";

function Workflow() {
  return (
    <div className='mt-20'>
      {/* Heading */}
      <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 font-bold'>
        Simplify your
        <span className='bg-gradient-to-r from-cyan-500 to-blue-800 p-4 text-transparent bg-clip-text'>
          {" "}task management
        </span>
      </h1>

      {/* Layout Container */}
      <div className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-7xl mx-auto px-6 mt-10'>

        {/* Left Side - Code Image */}
        <div className='w-full lg:w-1/2 p-4'>
          <img src={codeImg} alt="Task Management" className='rounded-lg shadow-lg' />
        </div>

        {/* Right Side - Checklist */}
        <div className='w-full lg:w-1/2 p-4 space-y-6'>

          {[
            { 
              title: "Task assignment made easy", 
              desc: "Assign tasks effortlessly with clear deadlines and priorities. Keep team members focused with structured workflows."
            },
            { 
              title: "Real-time progress tracking", 
              desc: "Monitor live project updates with visual indicators. Identify bottlenecks and ensure smooth task completion."
            },
            { 
              title: "Seamless team collaboration", 
              desc: "Enable smooth communication with task comments and file sharing. Keep all project discussions in one place."
            },
            { 
              title: "Automated deadline reminders", 
              desc: "Never miss a deadline with smart notifications. Get timely alerts for pending and overdue tasks."
            },
            { 
              title: "Calendar Integration & Scheduling", 
              desc: "Sync tasks with a calendar for better planning. View deadlines and meetings in a single, structured view."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle2 className="text-green-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Workflow;
