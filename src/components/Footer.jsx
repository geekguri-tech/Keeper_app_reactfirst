import React from "react";

function Footer(){

    var year = new Date();
    var neyear = year.getFullYear();

    return(
        <footer>
            <p>
                Copyright {neyear}
            </p>
        </footer>
    );
}

export default Footer;