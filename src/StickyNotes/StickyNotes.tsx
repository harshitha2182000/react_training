import { useState } from "react";
import './StickyNotes.css'

export function StickyNotes(props:any){
    let [noofedits,Setnoofedits]=useState(0);

    function handlebutton(){
        Setnoofedits(++noofedits);
    }
 return(
    
    <>
    <div>
    <div className="box">
        <h4 className="heading2">{props.title}</h4>
        <textarea className="textarea" /><br/>
        <button onClick={handlebutton} className="button">Ok</button>
        <br/>
        {noofedits>0 &&
        <p className="para">edited {noofedits} times</p>}
    </div>
    </div>
    </>

 );
}