import ProgressItem from "./ProgressItem";

const ProgressList = (props) => {

    const items = props.items.map((item) => (
        <li key={item.id} className="Progress-list__item">
            <ProgressItem text={item.text} tags={item.tags} />
        </li>
    ));

    return (
        <ul className="Progress-list">
            {items}
        </ul>
    )
}

export default ProgressList;