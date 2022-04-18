import React from "react";

function AboutMe() {
  return (
    <div>
      <div >
        <img src="assets\images\me.png" alt="me" className="  m-auto " />
      </div>

      <div className=" text-center mb-5 mt-20  text-white text-5xl ">
        Hi, I'm keemee
      </div>
      <p className=" text-center font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
        Perspiciatis architecto, facere quibusdam tempore quod perferendis
        voluptatibus.
      </p>
    </div>
  );
}

export default AboutMe;
