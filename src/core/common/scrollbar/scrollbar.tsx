import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';


const CustomScrollbar = () => {

    const options ={
        damping:0.7,
    }

    useEffect(()=>{
      Scrollbar.init(document.querySelector('.customScrollbar')!, options);

    },[])
 return null;
}

export default CustomScrollbar