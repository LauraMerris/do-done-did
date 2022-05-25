import {db} from '../firebase.js';
import {ref, onValue} from "firebase/database";
import { useState, useEffect } from "react";


const Test = () => {

    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const updatesRef = ref(db, 'updates');
        onValue(updatesRef, (snapshot) => {
            let data = snapshot.val();
            setProgress(data);
        });
    },[]);

    // Object.entries returns an array of arrays, the inner arrays are key value pairs for each object property

    return (
        <div>
            <div>Hi there</div>
            {Object.entries(progress).map(([key,{update}]) => {
                return <p key={key}>{update}</p>
            })}
        </div>
    )
};

export default Test;