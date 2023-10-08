import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Noteob from "../Noteob";

function App(){
    return  (<div>
                <Header />
                {Noteob.map(noteob =>
                    <Note 
                    key = {noteob.key}
                    title = {noteob.title}
                    msg = {noteob.msg}
                    />
                )}
                <Footer />
            </div>);
}

export default App;