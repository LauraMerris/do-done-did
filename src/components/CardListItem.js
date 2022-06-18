import classes from './CardListItem.module.css';

const CardListItem = (props) => {
    return (
        <div className={classes.cardList__item}>
            {props.children}
        </div>
    );
};

export default CardListItem;