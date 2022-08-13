
import Post from "./Post";

export default function PostList(props) {


    return(
        <div>
            <h1 style={{textAlign:"center"}}>POST LIST</h1>
            {props.posts.map( el =>
                (<Post post={el} key={el.id} />)
            )}
        </div>
    )
}