import ProgressItem from "./ProgressItem";

const ProgressList = (props) => {

    const items = Object.entries(props.items).map(([key,value]) => (
        <li key={key} className="Progress-list__item">
            <ProgressItem text={value.update} tags={value?.tags} />
        </li>
    ));

    return (
        <ul className="Progress-list">
            {items}
        </ul>
    )
}

export default ProgressList;