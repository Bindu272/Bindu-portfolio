import React from "react";
import { Link } from "react-router-dom";

const Hellooooooooo = () => {
  return (
    <div className="rounded-md p-4 sm:p-6 lg:p-8 bg-red-100 text-md description">
      <h1 className="text-red-400 font-bold text-2xl sm:text-3xl pb-2">Anonymous</h1>
      <p className="text-sm sm:text-base">
        Hey! I'm a MERN stack wizard with 3 years of hands-on experience. I turn
        code into cool, scalable apps that people love to use. Frontend,
        backend—I've got it covered. Always up for a new challenge and ready to
        bring your ideas to life. Let's make something awesome together!
      </p>
      <span className="flex flex-col sm:flex-row justify-evenly pt-3 space-y-2 sm:space-y-0 button">
       <Link to='/education'><button >Education</button></Link> 
        <button>Experience</button>
      </span>
    </div>
  );
};

export default Hellooooooooo;
