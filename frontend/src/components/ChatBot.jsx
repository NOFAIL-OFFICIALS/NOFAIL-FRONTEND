import { useState } from 'react';
import SimpleForm from './SimpleForm';


   

function ChatBot() {

    let [showChat, setShowChat] = useState(false);

    const startChat = () => { setShowChat(true); }
    const hideChat = () => { setShowChat(false); }
    
    return (
        <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}>click to chat... </button> 
            : <button className="btn" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div> 
    );
  };
  
  export default ChatBot