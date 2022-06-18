import classes from './CardList.module.css';

const CardList = (props) => {
    return (
        <div className={classes.cardList}>
            {props.children}
        </div>
    )
};

export default CardList;