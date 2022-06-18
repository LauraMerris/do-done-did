import Taglist from "./Taglist";
import classes from "./ProgressItem.module.css";

const ProgressItem = (props) => (
        <div className={classes.progressItem}>
            <p className={classes.progressItem__summary}>{props.text}</p>
            {props.tags !== undefined && <Taglist tags={props.tags} />}
        </div>
);

export default ProgressItem;

/*
if (props.tags !== null){
    <Taglist tags={props.tags} />
}
            */