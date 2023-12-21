// ReactDom.render( 
    //     <>
    //         <h1>Fusion Technical Services</h1>
    //         <p>Please like and share</p>   
    //         <h2>Please subscribe my channel </h2>
    //     </>
    //     document.getElementById("root")
    // );
    // const flname="Ayaz Maken";
    // ReactDom.render(
    //     <>
    //     <h2>My Name is {flname} </h2>
    //     <h1>Ayaz Technical Netflix Pick</h1>
    //     <p>Here is list of my fav Netflix  {Math.random()} series </p>
    //     <ol type="1">
    //         <li>evil dead 1</li>
    //         <li>evil dead 2</li>
    //         <li>evil dead 3</li>
    //         <li>evil dead 4</li>
    //         <li>evil dead 5</li>
    //         <li>evil dead 6</li>
    //     </ol>
    //     </>
    //     ,document.getElementById("root")
    //     )
    // time and date use in react
    // const fname = "Ayaz Maken"
    // const currentdate = new Date().toLocaleDateString();
    // const currenttime = new Date().toLocaleTimeString();
    // ReactDom.render(
    //     <>
    //         <h1>Hello my name is {fname}</h1>
    //         <p>Today's Date = {currentdate} </p>
    //         <p>Current Time = {currenttime} </p>
    //     </>
    //     ,document.getElementById("root")
    // )
    
    // .heading{
    //     color: hotpink;
    //     text-align: center;
    //     text-transform: capitalize;
    //     font-weight: bold;
    //     font-family: 'Kalnia', serif;
    // const heading ={
    //     color:"#fa9191",
    //     textTransform:"capitalize",
    //     textAlign:"center",
    //     fontFamily: '"Kalnia", serif',
    // fontFamily: '"Noto Sans JP", sans-serif'
    // }
    
    // const name = "ayaz"
    // const img1 = "https://picsum.photos/300/300"
    // const img2 = "https://picsum.photos/300/300/"
    // const img3 = "https://picsum.photos/300/300.jpg"
    // ReactDom.render(
    //     <>
    // <h1 style={heading}
    //      >My name is {name}</h1>
    // <div className='img_div'>
    // <img src={img1} alt='randomImages'/>
    // <img src={img2} alt='randomImages'/>
    // <img src={img3} alt='randomImages'/>
    // </div>
    // </>
    // ,document.getElementById("root")
    // )
    //////////////practice.........................................................
    // import Heading from "./Heading";
// let date = new Date();
// let greetings='';
// if(date>=6 && date>12){
//     greetings="Good Morning";    
// }else if(date=>1 && date<4){
//     greetings="Good afternoon";
// }else{
//     greetings="Good Evening";
// }

// date = date.getHours()
// ReactDom.render(
//      <h1>Hello sir,{greetings}</h1>
//       ,document.getElementById("root")
// );
// ReactDom.render(
//     <>
//      <Heading/>
//         <p>This is my world welcome to you</p>
//         <ol>
//             <ul>Ayaz</ul>
//             <ul>choti dunia </ul>
//             <ul>awais</ul>
//             <ul>aqib</ul>
//         </ol>
//     </>
//     ,document.getElementById('root')
// )
//...................................................................
// import favy,{favlang,office} from "./App1";
// // import * as detail from "./pp1"
// // ES6 Import export modules
// ReactDom.render(
//     <>
//         <ol>
//             <li>Ayaz</li>
//             <li>{favy}</li>
//             <li>{favlang}</li>
//             <li>{office()}</li>
//         </ol>
        
//     </>
//     ,document.getElementById("root")
// )
//.....................app.jsx data...............
// const favy = "Asrar ul Haq";
// const favlang = "React js"

// function office() {
//     let name = "vinod thapa technical"
//     return name;
// }
// export default favy;
// export {favlang,office} ;
 /* /* <ol>
        <li>sum of two number is{add(40,4)}</li>
        <li>{sub(250,10)}</li>
        <li>{mult(21,21)}</li>
        <li>{div(41,3)}</li>
    </ol>
    */ 
   
// // import Card from "./Cards"
// // import "./index.css"
// // import Sdata from './Sdata'


// // console.log(Sdata[0])
// // ReactDom.render(
// //   <>
// //  <header className="header">
// //  <h1>List of Top 5 Netflix Series</h1>
// //  </header>
// //   <Card
// //     imgsrc={Sdata[0].imgsrc}
// //     title={Sdata[0].title}
// //     sname={Sdata[0].sname}
// //     link={Sdata[0].link}
// //   />
  
// //   <Card
// //    imgsrc={Sdata[1].imgsrc}
// //     title={Sdata[1].title}
// //     sname={Sdata[1].sname}
// //     link={Sdata[1].link}
// //   /> 
// //    <Card
// //     imgsrc={Sdata[2].imgsrc}
// //     title={Sdata[2].title}
// //     sname={Sdata[2].sname}
// //     link={Sdata[2].link}
// //     />
// //  </>
 
// //     ,document.getElementById("root")
// // )


// ReactDOM.render(
//   <Apps />,
//   document.getElementById('root')
// );