import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Помилка завантаження відгуків:', error));
    }, []);

    return (
        <section className="card-section" id="reviews">
            <h2 className="section-title">Відгуки попередніх роботодавців</h2>
            <div id="comments-container">
                {comments.map(comment => (
                    <div className="review-item" key={comment.id}>
                        <h4>{comment.name} ({comment.email})</h4>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;