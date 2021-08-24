import './list.scss';

import Card from '../card/card';
import CardCreator from '../cardCreator/cardCreator';
///
///
///

interface Props {
    id: Number,
    title: String
}

function List({id, title}: Props) {
    let cards = [
        {
            id: 1,
            title: "1_",
            content: "1__",
            state: 0,
            createDate: new Date(),
            updateDate: new Date(),
            deadlineDate: new Date()
        },
        {
            id: 2,
            title: "2_",
            content: "2__",
            state: 0,
            createDate: new Date(),
            updateDate: new Date(),
            deadlineDate: new Date()
        },
        {
            id: 3,
            title: "3_",
            content: "3__",
            state: 0,
            createDate: new Date(),
            updateDate: new Date(),
            deadlineDate: new Date()
        },
        {
            id: 4,
            title: "4_",
            content: "4__",
            state: 0,
            createDate: new Date(),
            updateDate: new Date(),
            deadlineDate: new Date()
        },
        {
            id: 5,
            title: "5_",
            content: "5__",
            state: 0,
            createDate: new Date(),
            updateDate: new Date(),
            deadlineDate: new Date()
        }
    ]
    //
    //

    return (
        <div className="list">
            {/* {title}

            {
                cards.map(card => 
                    <Card
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        state={card.state}
                        createDate={card.createDate}
                        updateDate={card.updateDate}
                        deadlineDate={card.deadlineDate}

                        key={card.id}
                    />
                )
            }

            <CardCreator /> */}
        </div>
    )
}

export default List