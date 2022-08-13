import Counter from "./components/Counter";
import PostList from "./components/PostList";
import "./styles/App.css"
import {useRef, useState} from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPost] = useState([
        {id:1, header:"Title1", description:"Description1"},
        {id:2, header:"Title2", description:"Description2"},
        {id:3, header:"Title3", description:"Description3"},
        {id:4, header:"Title4", description:"Description4"}
    ]);

    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");


    const bodyInputRef = useRef();
    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            id:Date.now(),
            header,
            description
        }

        setPost([...posts, newPost])
    }

   return(
       <div>

           <form>

               {/*<input ref={bodyInputRef} type="text"/>*/}
               <MyInput
                   value={header}
                   onChange={(e)=>{
                        setHeader(e.target.value);
                    }}
                   type="text"
                   placeholder="Post Header" />
               <MyInput
                   value={description}
                   onChange={e => {
                       setDescription(e.target.value);
                   }}
                   type="text"
                   placeholder="Post Description" />
               <MyButton onClick={addNewPost} type="submit" >Create Post </MyButton>
           </form>
            <PostList posts={posts} />

       </div>
   );
}

export default App;
