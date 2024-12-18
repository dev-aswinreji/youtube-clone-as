import { comment } from "postcss"
import commentsData from "../utils/CommentData"
import { USER_ICON } from "../utils/ImageIcons"


const Comment = ({data})=>{
    const {author,text,replies}=data
    return (
        <div className="flex my-2 ">
            <img className="w-10 h-10" src={USER_ICON} alt="user" />
            <div className="px-3">
                <p className="font-bold">{author}</p>
                <p>{text}</p>
                
            </div>
        </div>
    )
}

const CommentList = ({comments })=>{
    return comments.map((comment,id)=> (
    <div key={id}> 
        <Comment  data={comment}/>
        <div className="pl-5 border boredr-l-black ml-5 ">
            <CommentList comments={comment.replies}/>
        </div>
    </div>
))}


const CommentContainer=()=>{
    return(
        <div className="p-3 m-5">
            <h1 className="text-2xl font-bold" >Comments:</h1>
           <CommentList comments={commentsData}/>
        </div>
    )
}

export default CommentContainer;