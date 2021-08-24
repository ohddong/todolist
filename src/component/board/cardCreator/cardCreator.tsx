import React from 'react';

import './cardCreator.scss';
///
///
///

function cardCreator() {
    return (
        <div className="card-creator">
            <p>Creator</p>

            <p>Title</p>
            <input className="title-input"/>

            <p>Content</p>
            <input className="content-input"/>

            <p>DeadLine Date</p>
            <input className="deadline-date-input"/>

            <button className="create-button">
                <span>Create</span>
            </button>
        </div>
    )
}

export default cardCreator