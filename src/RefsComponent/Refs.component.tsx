import {useRef} from "react";
import { Pages } from "../Notebook/Notebook.component";

export function RefL1(){
    const text1Ref:any=useRef();//it points to current obj in memory
    const text2Ref:any=useRef();//does not cause a re-render
    const pageRef:any=useRef();

    function handleClick(){
        text1Ref.current.focus();
        text1Ref.current.style.backgroundColor='yellow';
        text2Ref.current.value='me@jpmc.com'
        console.log(pageRef.current);
    }
    return(
        <>
        <input type="text" value="Hello" ref={text1Ref}/><br/>
        <input type="email" value="abc@gmail.com" ref={text2Ref}/><br/>
        <Pages Content='A trick for experimenting' ref={pageRef}/>
        <button onClick={()=>handleClick()}>Focus</button>

        </>
    )
}

/*
Steps to work with refs
1. Create the refs
    let myRef:any = useRef()
2. Map the refs to the elements
    <input type='email' ref={myRef}/>
3. The useRef Object has a Object called Current. This points to the html element in React DOM.
    Eg: function fn(){
                                 console.log( myRef.current)
                              }
 
}
*/