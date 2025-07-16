const CommentsList = ({ comments }) => (
    <>
        <h2>Comments:</h2>
        {comments && comments.map(comment => (
            <div className="comment" key={ comment.postedBy + ': ' + comment.text }>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </>   
)

export default CommentsList;