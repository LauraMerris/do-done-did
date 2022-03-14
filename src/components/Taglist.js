const Taglist = (props) => {

    return (
        <ul className={`Taglist ${props.class}`.trim()}>
            {props.tags.map((tag,index) => <li key={index} className="Taglist__item">{tag}</li>)}
        </ul>
    );
};

export default Taglist;