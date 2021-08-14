import React,{useState} from 'react'

function CreateArea(props) {
    const [note,setNote]=useState({
        title: "",
        content: ""
    });
    function doit(event){
       const {name,value}=event.target;
       setNote(prev => {
           return{
               ...prev,
               [name]: value
           };
       });

    }

    function submitit(event){
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title:"",
            content:""
        })
    }

    return (
        <div>
            <form>
                <input onChange={doit} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={doit} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitit}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;


