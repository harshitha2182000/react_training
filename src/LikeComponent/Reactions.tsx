import { useState } from "react";
import {Pages} from '../Notebook/Notebook.component'

export function Reactions(props:any){
    
   let [likes,setLikes]=useState(0);
   let[love,setLove]=useState(0);
   let[wow,setWow]=useState(0);
   let[lolz,setLolz]=useState(0);


    
    // function addLikes(){
    //     likes=likes+1;
    //     setLikes(likes);
    // 
    return (
        <>
        <div>Props are read only and can be shared only with the child component</div>
        <button onClick={()=>setLikes(++likes)}>{likes} Like</button>
        <button onClick={()=>setLove(++love)}>{love} Love</button>
        <button onClick={()=>setWow(++wow)}>{wow} Wow</button>
        <button onClick={()=>setLolz(++lolz)}>{lolz} Lolz</button>
        <hr/>
        <h3>The following is a child component</h3>
        <Pages Content={props.likes}/>
        </>

    );
}
//line 6: when ever u pass func pass it in this way