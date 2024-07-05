import { useRef, useState } from "react"
import { Pages } from "../Notebook/Notebook.component";

export function SimpleList(){
    let arr:any[]=[
        {key:1001,value:'first product',style:{backgroundColor:'yellow'}},
        {key:1002,value:'second product',style:{backgroundColor:'green'}},
        {key:1003,value:'third product',style:{backgroundColor:'blue'}}
    ]
    

    return(
        <>
        <ul>
        {
            arr.map((item)=>{
                return(
                    <li key={item.key} style={item.style}>
                    {item.value}
                    </li>

                )
            }

            )
        }
        </ul>
        </>
    )
}
export function UseSpreadOperator(){
    let[contentArr,setContent]=useState<string[]>([]);
    let textRef:any=useRef();

    function addItem():void{
        let newContent=textRef.current.value;
        setContent([...contentArr,newContent])
    }
    return(
        <>
        <input type="text" placeholder="enter content to add" ref={textRef}/>
        <button onClick={()=>addItem()}>Add page</button>
        {
            contentArr.map((item)=>{
                return(
                <Pages Content={item}/>
            )

            })
        }
        </>
    )
}