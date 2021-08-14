import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";


function App() {
  const [notes,setNotes]= useState([])

  function Addnote(newNote){
    setNotes(prevNotes => {
      return[...prevNotes, newNote];
    });
  };
  function Delete(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteitem,index) => {
        return index !==id;
      });
    });
  };
  
  return (
    <div className="App">
      <Header  />
      <CreateArea onAdd={Addnote}/>
      {notes.map((notei,index) => {
        return <Note key = {index} id = {index}  title={notei.title} content={notei.content} onDel={Delete}/> ;
      })}
      

      <Footer />
    </div>
  );
}

export default App;
