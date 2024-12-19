import { useEffect, useState } from "react";
import ChatMessege from "./ChatMessege";
import { useDispatch, useSelector } from "react-redux";
import { addMessege } from "../utils/ChatSlice";
import { generateRandamName, generateRandemMessege } from "../utils/Helper";

const LiveChat = () => {
    const [liveMessege,setLiveMessege]=useState("")
    const dispatch=useDispatch()
    const chatmesseges = useSelector((store)=>store.chat.messege)

    useEffect(()=>{
        const i= setInterval(()=>{
            dispatch(addMessege({
                name:generateRandamName(),
                messege:generateRandemMessege(15) 
            }))

        },1500)
        return ()=> clearInterval(i)
    },[])
    return (
        <>
        <div className="h-[510px] w-[520px] ml-2 p-2 rounded-lg border bg-slate-50 overflow-y-auto flex flex-col-reverse ">
            {chatmesseges.map((c,i)=>(
                <ChatMessege key={i} name={c.name} messege={c.messege}/> 
            ))}
        </div>
        <form className="w-[520px] p-2 ml-2 border boreder-black rounded-lg" onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessege({
                name:"Arshad",
                messege:liveMessege,
            }))
            setLiveMessege("")
        }}> 

            <input className="w-96 rounded-md text focus:outline-none" type="text" value={liveMessege} onChange={(e)=>{
                setLiveMessege(e.target.value)
            }} placeholder="Chat......"/>
            <button className="px-2 mx-2 bg-green-100 rounded-md items-end ml-14 focus:outline-none">send</button>
        </form>
        </>
    );
};

export default LiveChat;
