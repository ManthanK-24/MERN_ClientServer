import React, { useEffect, useState } from "react";

function CustomComponent(){
    const[data,setData] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:3001/route')
        .then(res=>res.json())
        .then(data=>setData(data.message));
    },[]);
    return(<p>{!data?"Loading...":data}</p>);

};
export default CustomComponent;
