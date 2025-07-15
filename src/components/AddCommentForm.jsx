import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ eventName, onEventUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async() => {
        const response = await axios.post(`/api/events/${eventName}/comments`, {
            postedBy: name,
            text: commentText,
        });
        const updatedEvent = response.data;
        onEventUpdated(updatedEvent);
        setName('');
        setCommentText('');
    }

    return(
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            { user && <p>You are posting as {user.email}</p>}
            <textarea 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="4" 
                cols="50" />
            <button onClick={addComment}>
                Add Comment
            </button>
        </div>
    )
}

export default AddCommentForm;