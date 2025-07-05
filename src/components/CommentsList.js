const CommentsList = ({ comments }) => (
    <>
        <h2 style={{"padding": "0px 0px 100px 100px"}} >Comments:</h2>
        {comments.map(comment => (
            <div className="comment" key={ comment.postedBy + ': ' + comment.text }>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </>   
)

export default CommentsList;