import React from "react";


const styles = {
    chatNameContainer: {
        background: "rgba(242, 233, 255, 0.05)",
        borderRadius: "20px",
        border: '1px solid rgba(245, 245, 245, 0.8)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        width: "100%",
        height: "70px",
        margin: "10px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    name: {
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        fontWeight: 400,
        
    }
}


function ChatBar (props){
    return(
        <div style={styles.chatNameContainer}>
            <span style={styles.name}>Jane Doe</span>
        </div>
    )
}

export default ChatBar;