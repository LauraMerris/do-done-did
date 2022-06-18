import classes from './Card.module.css';

const Card = (props) => (
    <div className={classes.card}>
        <h2 className={classes.card__title}>{props.title}</h2>
        <div className={classes.card__content}>
            {props.children}
        </div>
    </div>
);


export default Card;

                        