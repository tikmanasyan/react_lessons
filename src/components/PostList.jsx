import {useState} from "react";
import Post from "./Post";

export default function PostList() {
    const [posts, setPost] = useState([
        {id:1, title:"Title1", body:"Description1"},
        {id:2, title:"Title2", body:"Description2"},
        {id:3, title:"Title3", body:"Description3"},
        {id:4, title:"Title4", body:"Description4"}
    ])

    return(
        <div>
            <h1 style={{textAlign:"center"}}>POST LIST</h1>
            {posts.map( el =>
                (<Post post={el} key={el.id} />)
            )}
        </div>
    )
}