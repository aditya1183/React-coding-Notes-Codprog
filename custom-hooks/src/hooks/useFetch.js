import { useEffect, useState } from "react";

// const url="https://jsonplaceholder.typicode.com/posts";

function useFetch(url){
    const [data , setdata]=useState(null);
    const [ispending , setispending]=useState(false);
    const [iserror , setiserror]=useState(false);
    useEffect(()=>{
      
        setispending(true);
        const contoller =new AbortController();

        async function fetchdata(){
            try{
                const respponce= await fetch(url , {signal:contoller.signal});
                if(!respponce.ok)
                {
                    throw Error("Arra Bahi kuch galat hai ........")
                }
                    const data= await respponce.json();
                    setdata(data);
                    setispending(false);
                    setiserror(null);

            }
            catch(Error)
            {
                console.dir(Error)
                setiserror(Error.message)
                setispending(false);
               


            }
           


        }
        fetchdata();
        return ()=>{
            contoller.abort();

        }

    } , [url]);
    return {data , ispending , iserror};

}
export default useFetch;
