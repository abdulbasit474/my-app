import React, { useState } from 'react'

function Comments({ categoryComment, mov_id, handleAddComment }) {
    console.log(handleAddComment) // Log the handleAddComment function to the console
    const [newComment, setNewComment] = useState("") // State variable to store the new comment

    console.log(newComment) // Log the value of newComment to the console
    console.log(categoryComment) // Log the value of categoryComment to the console

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Send a POST request to the server with the new comment data
        fetch(`http://localhost:9292/${categoryComment}`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                comment: newComment,
                likes: 0,
                mov_id: mov_id
            })
        }).then(resp => resp.json())
            .then(addcomment => {
                handleAddComment(addcomment) // Call the handleAddComment function and pass the newly added comment
                console.log(addcomment) // Log the newly added comment to the console
                e.target.reset(); // Reset the form after submission
            })

        setNewComment(""); // Clear the newComment state after submission
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="comment" onChange={(e) => setNewComment(e.target.value)}></input> {/* Input field for entering the comment */}
                <button type="submit">Submit</button> {/* Submit button */}
            </form>
        </div>
    )
}

export default Comments
