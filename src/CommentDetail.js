import React from 'react';

const CommentDetail = prop => {

    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar" style={{marginRight: '5px'}}>
                    <img src={prop.avatar} alt="avatar" style={{width: 35, height: 35}} />
                </a>
            </div>
            <div className="comment">
                <a href="/" className="author">
                    {prop.author}
                </a>
                <div className="metadata">
                    <span className="date">{prop.date}</span>
                </div>
            </div>
            <div className="text">
                {prop.phrase}
            </div>
        </div>
    );
};

export default CommentDetail;