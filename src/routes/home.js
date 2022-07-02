import '../App.css';
import ProgressList from '../components/ProgressList';
import CardList from '../components/CardList';
import CardListItem from '../components/CardListItem';
import Card from '../components/Card';
import AddProgress from '../components/AddProgress';
import { db } from '../firebase';
import { ref, onValue, child, push, update } from "firebase/database";
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

    const createNewProgressItem = (item) => {
        const newPostKey = push(child(ref(db), '/Updates/Saturday/')).key;
        const updates = {};
        updates['/Updates/Saturday/' + newPostKey] = item;
        
        return update (ref(db), updates)
        .then(() => {
            console.log('saved');
            console.log(progress);
        })
        .catch(() => {
            console.log('oops something went wrong');
        });
    }

    const progressSubmitHandler = (progressData) => {
        // at this point we would update the database with the new item
        // or would we update the cardlist component and then send to the database?
        console.log(progressData);
        createNewProgressItem(progressData);

    }

    return (
        <div className="Skeleton__content Skeleton__content--narrow">
            <h1 className="Skeleton__title Skeleton__title--centered">7 &#8211; 13 March</h1> 
            <AddProgress onProgressSubmit={progressSubmitHandler} />
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

