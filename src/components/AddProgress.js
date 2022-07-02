import {useState} from 'react';
import classes from './AddProgress.module.css';



const AddProgress = (props) => {

    const [progress, setProgress] = useState('');
    const [tag, setTag] = useState('');
    const [day, setDay] = useState('');

    const progressTextChangeHandler = (e) => {
        setProgress(e.target.value);
    };

    const progressTextTagHandler = (e) => {
        setTag(e.target.value);
    };

    const progressDayHandler = (e) => {

    };

    const progressSubmitHandler = (e) => {
        e.preventDefault();
        let progressSubmission = {
            update: progress,
            tags: [tag]
        };
        props.onProgressSubmit(progressSubmission);
        clearForm();
    };

    const clearForm = () => {
        setProgress('');
        setTag('');
    };

    return (
        <div className="AddProgress">
            <form onSubmit={progressSubmitHandler}>
                <select onChange={progressDayHandler}>
                    <option value="Saturday">Today</option>
                    <option value="Friday">Friday</option>
                    <option value="Thursday">Thursday</option>
                </select>
                <textarea autoFocus aria-label="What's your progress?" className={classes.addProgress__input} rows="3" placeholder="What's your progress?" value={progress} onChange={progressTextChangeHandler}></textarea>
                <input id="AddProgressText" placeholder="+ add tag" type="text" aria-label="tags" className={classes.addProgress__tags} value={tag} onChange={progressTextTagHandler} />
                <button type="submit" className={classes.addProgress__button}>Update</button>
            </form>
        </div> 
    );
}

export default AddProgress;