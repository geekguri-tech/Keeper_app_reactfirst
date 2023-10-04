import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
    return  (<div>
                <Header />
                <Note 
                    title = "I want to tell Something"
                    msg = "I will become successful"
                    />
                <Note
                    title = "Here is another Advice"
                    msg = "Be Consistent"
                    />
                <Footer />
            </div>);
}

export default App;