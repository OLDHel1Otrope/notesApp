import SideBar from "./SideBar";
import FolderView from "./FolderView";
import NoteView from "./NoteView";

const Container:React.FC=()=>{
    return(
        <div className="flex flex-row w-screen h-screen text-white font-sans">
            <SideBar/>
            <FolderView/>
            <NoteView/>
        </div>
    )
}

export default Container