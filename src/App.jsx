import React, { useState } from "react";
import "./index.css";

// const App = () => {
//   const [name, setName] = useState("");
//   const [fullName, setFullName] = useState();
//   const inputEvent = (Event) => {
//     console.log(Event.target.value);
//     setName(Event.target.value);
//   };
//   const onSubmit = () => {
//     setFullName(name);
//   };
//   return (
//     <>

//       <div className="form">
//       <form>
//       <div>
//         <h1 className="h1">Hello {fullName}</h1>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           onChange={inputEvent}
//         />
//         <br />
//         <br />
//         <button className="btn" onClick={onSubmit}>
//           Click Here
//         </button>
//         </div>
//         </form>
//         </div>

//     </>
//   );
// };

// const App =()=> {
//     let newTime = new Date().toLocaleTimeString();
//     const [ctime,setCtime]=useState(newTime);
//     const updateTime=()=>{
//     let newTime = new Date().toLocaleTimeString();
//     setCtime(newTime);

//     }
//     setInterval(updateTime,1000)
//     return (
//     <>
//   <div className="div">
//     <h1>{ctime}</h1>
/* <button className="button" onClick={updateTime}>Get Time</button> */
//   </div>

//     </>
//     );

// }

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  })


  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!")
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
  
  };
  // const inputEventTwo = (event) => {
  //   console.log(event.target.value);
  //   setLastName(event.target.value);
  // };

  return (
    <>
      <div className="main_div">
        <form onClick={onSubmit}>
          <div>
            <h1>Hello Welcome {fullName.fname} {fullName.lname}</h1>
            <input
              type="text"
              placeholder="Enter your First Name"
              onChange={inputEvent}
              value={fname}
            ></input>
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter your Last Name"
              onChange={inputEvent}
              value={lname}
            ></input>
            <br></br>
             <input
              type="email"
              placeholder="Enter your Email Address"
              onChange={inputEvent}
              value={name}
            ></input><br></br>
            <br />
            <button className="btn">Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
