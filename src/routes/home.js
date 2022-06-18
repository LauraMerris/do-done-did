import '../App.css';
import ProgressList from '../components/ProgressList';
import CardList from '../components/CardList';
import CardListItem from '../components/CardListItem';
import Card from '../components/Card';
import { db } from '../firebase';
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";


const Home = () => {

    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const updatesRef = ref(db, 'Updates');
        onValue(updatesRef, (snapshot) => {
            let data = snapshot.val();
            setProgress(data);
        });
    },[]);

    return (
        <div className="Skeleton__content Skeleton__content--narrow">
            <h1 className="Skeleton__title Skeleton__title--centered">7 &#8211; 13 March</h1> 
            <div className="Card__input Add-progress">
                <textarea autoFocus aria-label="What's your progress?" className="Add-progress__input" rows="3" placeholder="What's your progress today?"></textarea>
                <input placeholder="+ add tag" type="text" aria-label="tags" className="Add-progress__tags" />
                <button className="Add-progress__button">Update</button>
            </div>   
            <CardList>
                {Object.entries(progress).map(([key, value]) => (
                    <CardListItem key={key}>
                        <Card title={key}>
                            <ProgressList items={value} />
                        </Card>
                    </CardListItem>
                ))}
            </CardList>
        </div>
    )
}

export default Home;

