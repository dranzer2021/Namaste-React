import { useEffect, useState } from "react";

export const useCounter = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        const interval= setInterval(() => {
            setCount((prev) => prev+1);
        },1000);
         return ()=> {clearInterval(interval)};
    },[]);
    return count;
}

