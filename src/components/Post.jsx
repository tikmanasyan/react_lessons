import "./../styles/Post.css";
export default function Post(props) {
    return(
        <div className="post">
            <h2 className="post-title">{props.post.title}</h2>
            <p className="post-description"> {props.post.body}</p>
            <button className="btn-more">More</button>
        </div>
    );
}