import classes from './AddProgress.module.css';

const AddProgress = () => {
    return (
        <div className="AddProgress">
            <textarea autoFocus aria-label="What's your progress?" className={classes.addProgress__input} rows="3" placeholder="What's your progress today?"></textarea>
            <input placeholder="+ add tag" type="text" aria-label="tags" className={classes.addProgress__tags} />
            <button className={classes.addProgress__button}>Update</button>
        </div> 
    );
}

export default AddProgress;