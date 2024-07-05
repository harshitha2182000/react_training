import './Notebook.css';
export function Notebook(props:any){
    return(
       <>
       <h1>Books</h1>
         <h2>
            Bookname:{props.BookName}
            Number of pages:{props.TotalPages}
         </h2>
         <hr/>
        
            <Pages Content="This content from page5"/>
            <p>Felling Lucky..Create dynamic component</p>
            {(()=><b>Your lucky page is 49</b>)()}
       </> 
    );
}


export function Pages(props:any){

    function addStyles(value:boolean) : React.CSSProperties{
                    if(value){
                        return {color:'red'}
                    }
                    return{color:'green'}
    }
    var pageStyles={
        color: 'blue',
    }
    return(
        <>
        <p className="page-bg" style={addStyles(true)}>
        {props.Content}
        </p>
        </>
    );
}