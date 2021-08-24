import React from 'react';

import './board.scss';

import List from './list/list';
import ListCreator from './listCreator/listCreator';
///
///
///

function Board() {
    let lists = [
        {
            id: 1,
            title: "1_"
        },
        {
            id: 2,
            title: "2_"
        },
        {
            id: 3,
            title: "3_"
        },
        {
            id: 4,
            title: "4_"
        },
        {
            id: 5,
            title: "5_"
        }
    ]
    return (
        <div className="board">
            {
                lists.map(list => 
                    <List
                        id={list.id}
                        title={list.title}

                        key={list.id}
                    />    
                )
            }

            <ListCreator />
        </div>
    )
}

export default Board