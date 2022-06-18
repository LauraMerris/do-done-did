import ProgressItem from "./ProgressItem";
import classes from './ProgressList.module.css';

const ProgressList = (props) => {

    const items = Object.entries(props.items).map(([key,value]) => (
        <li key={key} className={classes.progressList__item}>
            <ProgressItem text={value.update} tags={value?.tags} />
        </li>
    ));

    return (
        <ul className={classes.progressList}>
            {items}
        </ul>
    )
}

export default ProgressList;