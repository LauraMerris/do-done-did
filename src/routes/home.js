import '../App.css';
import ProgressList from '../components/ProgressList';
import Card from '../components/Card';
import Taglist from '../components/Taglist';
import TagManager from '../components/TagManager';

// dummy data
const week = [
    {
        day:"today",
        entries:[
            {
                id:'1',
                text:"Created the skeleton and styling for Do Done Did - an app to keep track of project progress.",
                tags:["portfolio"]
            }
        ]
    },
    {
        day:"yesterday",
        entries: [
            {
                id:'2',
                text:"Summary of yesterday's work. Perhaps I did a few things and there's a block of text here that explains the top three things that I achieved.",
                tags:["game dev","portfolio"]
            },
            {
                id:'3',
                text:"Created an app to record progress on projects throughout the week",
                tags:["portfolio", "javascript"]
            },
            {
                id:'4',
                text:"Prep for scenario 1 of Peculiar game",
                tags:["game dev"]
            }
        ],
    },
    {
        day:"friday",
        entries: [
            {
                id:'5',
                text:"I'm sure I did something on Friday. Why don't I make something I can sell?",
                tags:["portfolio"]
            }
        ],
    },
    {
        day:"thursday",
        entries: [
            {
                id:'1',
                text:"Got half way through finishing my local landscapes painting. Got an idea of what colours I need now - waiting on purchase.",
                tags:["curious","writing"]
            },
            {
                id:'2',
                text:"Scheduled all Twitter posts for the next week.",
                tags:["portfolio", "social media"]
            },
            {
                id:'3',
                text:"Prep for scenario 1 of Peculiar game",
                tags:["writing"]
            }
        ],
    },
];


const Home = () => {
    return (
        <div className="Skeleton">
            <header className="Skeleton-header">
                <div className="menu">
                    <a className="menu__item">Stats</a>
                    <a className="menu__item">Settings</a>
                    <a className="menu__item">Account</a>
                </div>
            </header>
            <div className="Skeleton__content Skeleton__content--narrow">
                <h1 className="Skeleton__title Skeleton__title--centered">7 &#8211; 13 March</h1>
                <div className="Card-list">
                    {week.map((item) => (
                        <div key={item.day} className="Card-list__item">
                            <Card key={item.day} title={item.day}>
                                {(item.day === "today") ? 
                                    <div className="Card__input Add-progress">
                                        <textarea autoFocus aria-label="What's your progress?" className="Add-progress__input" rows="3" placeholder="What's your progress today?"></textarea>
                                        <input placeholder="+ add tag" type="text" aria-label="tags" className="Add-progress__tags" />
                                        <button className="Add-progress__button">Update</button>
                                    </div>
                                :""}
                                <ProgressList items={item.entries} />
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;