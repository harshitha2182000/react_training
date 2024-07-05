import { useToogleHook } from "./ToogleHook.hook";

export function UseToogleHookComponent(){
    let[isToggle,toggleFn]=useToogleHook(false);
    var onStyle={backgroundColor:'yellow'}
    var ofStyle={backgroundColor:'grey'}
    return(<>
    <button onClick={()=>toggleFn()}>Toggle</button>
    {isToggle?<input style={onStyle}/>: <input style={ofStyle}/>}   
    </>)
}


export function UseDynamicToggle(props:any){
    let[isToggle,toggleFn]=useToogleHook(false);
    return(
        <>
        <button onClick={()=>toggleFn()}>Conditionally load a component</button>
        {isToggle?props.IfCase:props.ElseCase}
        </>
    );

}