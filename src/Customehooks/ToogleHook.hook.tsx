import { useState } from "react";

type ToggleReturnType=[boolean,()=>void];
export function useToogleHook(initialValue:boolean=false) : ToggleReturnType
{
    let [value,setValue]=useState(initialValue);
    const toggleFn=():void=>{
        setValue(!value);
    }
    return[value,toggleFn]

}
