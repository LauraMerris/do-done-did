import '../App.css';
import ProgressList from '../components/ProgressList';
import Card from '../components/Card';
import { signUserOut, useAuthState, db } from '../firebase';
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

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


const UserGreeting = (props) => {
    const greeting = props.user?.email;
    return <span className="menu__greeting">{greeting}</span>;
}

const Home = () => {

    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const updatesRef = ref(db, 'updates');
        onValue(updatesRef, (snapshot) => {
            let data = snapshot.val();
            setProgress(data);
        });
    },[]);

    const user = useAuthState();

    return (
        <div className="Skeleton">
            <header className="Skeleton-header">
                <div className="menu">
                    <UserGreeting user={user} />   
                    <a className="menu__item">My week</a>
                    <a className="menu__item">Stats</a>
                    <a className="menu__item">Settings</a>
                    <button className="menu__item" onClick={signUserOut}>Logout</button>
                </div>
            </header>
            <div className="Skeleton__content Skeleton__content--narrow">
                <h1 className="Skeleton__title Skeleton__title--centered">7 &#8211; 13 March</h1>        
                <div className="Card-list">
                    <div className="Card__input Add-progress">
                        <textarea autoFocus aria-label="What's your progress?" className="Add-progress__input" rows="3" placeholder="What's your progress today?"></textarea>
                        <input placeholder="+ add tag" type="text" aria-label="tags" className="Add-progress__tags" />
                        <button className="Add-progress__button">Update</button>
                    </div>
                    {Object.entries(progress).map(([key, value]) => (
                        <div key={key} className="Card-list__item">
                            <Card key={key} title={key}>
                                <ProgressList items={value} />
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;

