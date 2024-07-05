import { useRef, useState } from "react";
import { StickyNotes } from "./StickyNotes";

export function StickyNotesContainer(){
    let[contentArr,setContent]=useState<string[]>([]);
    
    let textRef:any=useRef();
    function addItem():void{
        let newContent:any=textRef.current.value;
        setContent([...contentArr,newContent])
    }
    return(
        <>
        <input type="text" placeholder="enter content to add"  ref={textRef}/>

        <button onClick={()=>addItem()}>Add page</button>
        {
            contentArr.map((item:any)=>{
                return(
                <StickyNotes title={item}/>
            )

            })
        }
        </>
    )
}