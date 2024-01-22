import { useState } from 'react';
import '../styles/App.style.css';
function App(){
  let [color,setColor]=useState("#ffffff");
  const changeColor=(color)=>{
    setColor(color);
    console.log(color);
  }
  return <>
  <div className="main w-full h-screen" style={{  backgroundColor:color
 }}>

  </div>
 {/* <div className="palette fixed flex flex-wrap px-2 py-3 bg-green-400 h-content bottom-12 text-center m-auto inset-x-0 my-12 justify-center "> */}
   
  <div className="palette flex-column flex-wrap mx-5 text-center fixed inset-x-0 bottom-12 gap-4 w-auto border-2 justify-center border-black p-2 h-32 rounded-xl border-solid">
     <h1 className='text-center my-2 text-2xl'>Color Palatte Buttons</h1>
    <div className="palette-button flex flex-wrap  gap-4 w-auto border-2 justify-center border-black p-2 h-auto rounded-xl bg-green-200 border-solid">
    <button id="btn1" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#000000", color:"#ffffff"}} onClick={()=>{changeColor("#000000")}}>Black</button>
    <button id="btn2" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#00ff00"}} onClick={()=>{changeColor("#00ff00")}}>Green</button>
    <button id="btn3" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#ff0000"}} onClick={()=>{changeColor("#ff0000")}}>Red</button>
    <button id="btn4" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#0000ff",color:"#ffffff"}} onClick={()=>{changeColor("#0000ff")}}>Blue</button>
    <button id="btn5" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#ffffff"}} onClick={()=>{changeColor("#ffffff")}}>White</button>
    <button id="btn6" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#ba55d3"}} onClick={()=>{changeColor("#ba55d3")}}>Medium Orchid</button>
    <button id="btn7" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#deb887"}} onClick={()=>{changeColor("#deb887")}}>Burly Wood</button>
    <button id="btn8" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#ffd700"}} onClick={()=>{changeColor("#ffd700")}}>Gold</button>
    <button id="btn9" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#f8f8ff"}} onClick={()=>{changeColor("#f8f8ff")}}>Ghost White</button>
    <button id="btn10" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#708090"}} onClick={()=>{changeColor("#708090")}}>Slate Grey</button>
    <button id="btn11" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#8e3a59"}} onClick={()=>{changeColor("#8e3a59")}}>Quinacridone Magenta</button>
    <button id="btn12" className='rounded text-xl w-18 h-auto px-1 py-1 text-center' type='button' style={{backgroundColor:"#ffc40c"}} onClick={()=>{changeColor("#ffc40c")}}>Mikado Yellow</button>
    </div>
  </div>

  </>
}
export default App;