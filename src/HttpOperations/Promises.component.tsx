import { useState } from "react";
import { Pages } from "../Notebook/Notebook.component";

export function Promises(){
    let[sdata,setData]=useState<any[]>([])

    function getData(){
        var result:Promise<Response>=fetch('https://jsonplaceholder.typicode.com/posts');
        result.then((res)=>res.json())
              .then(data=>setData(data))
    }
    function postData(){
        var result:Promise<Response>=fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method:'POST',
                body: JSON.stringify({
                    
                        userID: 1,
                        id: 1,
                        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    
                }),
                headers:{
                    'Content-type':'application/json; charset=UTF-8'
                }
            }


        );

        result.then(res=>res.json())
              .then(data=>console.log(`The new id generated for added post is:${data.id}`));

    }
    function putData(){
        var result:Promise<Response>=fetch('https://jsonplaceholder.typicode.com/posts/1',
            {
                method:'PUT',
                body: JSON.stringify({
                    
                        userID: 1,
                        id: 1,
                        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    
                }),
                headers:{
                    'Content-type':'application/json; charset=UTF-8'
                }
            }


        );

        result.then(res=>res.json())
              .then(data=>console.log(data))
              .catch((err)=>console.log(err));

    }


    return(
        <>
        <button onClick={()=>getData()}>Get data</button>
        <button onClick={()=>postData()}>Post data</button>
        <button onClick={()=>putData()}>Put data</button>
        <hr/>
        {
            sdata?.map((item)=>{

                return(<Pages Content={item.body}/>);

            })
        }

        </>
    )
}