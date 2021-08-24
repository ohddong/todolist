import React from 'react';

import './card.scss';
///
///
///

interface Props  {
    id: Number,
    title: String,
    content: String,
    state: Number,
    createDate: Date,
    updateDate: Date,
    deadlineDate: Date
}

function Card({id, title, content, createDate, updateDate, deadlineDate}: Props) {
    //
    //

    return (
        <div className="card">
            <p>{title}</p>
            <p>{content}</p>
            <p>{createDate.toString()}</p>
            <p>{updateDate.toString()}</p>
            <p>{deadlineDate.toString()}</p>
        </div>
                        
    )
}

export default Card