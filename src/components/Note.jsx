import React from "react";
import Msg from "./Msg";

function Note(props){
    return(
        <div className="note">
            <h1>
                {props.title}
            </h1>
           <Msg msginfo = {props.msg} />
        </div>
    );
}

export default Note;