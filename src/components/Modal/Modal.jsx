import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

const Modal = (props) => {
    // {props.open && document.getElementById('root').classList.add('overflow-hidden')}
    const handleOutsideClick=(e)=>{
        if(e.target.classList.contains('content')){
            return
        }else{
            props.change(false) 
        }
    }
    if(props.open)
    return ( 
        <div className="fixed top-0 z-[99] w-[100vw] h-[100vh] bg-[rgb(0,0,0,0.4)] flex justify-center items-center" onClick={(e)=>handleOutsideClick(e)}>
            <div className="content flex flex-col items-center justify-center p-6 px-8 bg-white rounded-xl relative md:w-1/2 w-[90%] h-[fit-content] max-h-[90%] overflow-y-auto">
                <CgClose className="absolute top-4 right-5 hover:cursor-pointer" onClick={()=>props.change(false)} />
                {props.children}
            </div>
        </div>
     );
}
 
export default Modal;