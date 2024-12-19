import { USER_ICON } from "../utils/ImageIcons";

const ChatMessege = ({ name, messege }) => {
    return (
        <div className="flex items-center  p-2 mb-2  rounded-lg">
            <img className="h-8 w-8 rounded-full" src={USER_ICON} alt="User Icon" />
            <div className="flex ml-3 items-center">
                <span className="font-bold text-gray-800 mr-5">{name}</span>
                <span className="text-sm text-gray-600">{messege}</span>
            </div>
        </div>
    );
};

export default ChatMessege;
