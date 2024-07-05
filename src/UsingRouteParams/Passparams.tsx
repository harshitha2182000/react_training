import { useParams } from "react-router-dom";

export function Passparams(){
    let {name,place,animal,thing}=useParams();
    return(
        <>
        <p>Name:<b>{name}</b></p>
        <p>place:<b>{place}</b></p>
        <p>animal:<b>{animal}</b></p>
        <p>thing:<b>{thing}</b></p>
        </>
    )
}