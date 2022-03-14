
const Card = (props) => (
    <div className="Card">
        <h2 className="Card__title">{props.title}</h2>
        <div className="Card__content">
            {props.children}
        </div>
    </div>
);


export default Card;

                        