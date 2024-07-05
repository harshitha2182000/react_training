import {useState,useEffect} from 'react';

export function Logger(props:any){
    const[message,setmsg]=useState('');
    const[source,setsource]=useState('');
    useEffect(()=>{
        console.log(`****************************************************`);
        console.log(`Value of msg changed to:${message}`);
        console.log(`Value of source changed to:${source}`);
        console.log(`Value of prop changed to:${props}`);
        console.log(`****************************************************`);
      
    },[message,source,props.object])

    function changemsg(e:any){
        setmsg(e.target.value);
    }
    function changeSource(e:any){
        setsource(e.target.value);
    }
    return(
      <>
      <input type='text' onChange={(e)=>changemsg(e)}/><br/><br/>
      <input type='text' onChange={(e)=>changeSource(e)}/><br/><br/>
      
      </>
    );
}