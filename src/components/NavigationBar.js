import classes from './NavigationBar.module.css';

const NavigationBar = (props) => {

    const UserGreeting = (props) => {
        const greeting = props.user?.email;
        return <span className={classes.menu__greeting}>{greeting}</span>;
    };

    return (
        <div className={classes.menu}>
            <UserGreeting user={props.user} />   
            <a className={classes.menu__item}>My week</a>
            <a className={classes.menu__item}>Stats</a>
            <a className={classes.menu__item}>Settings</a>
            <button className={classes.menu__item} onClick={props.onSignOut}>Logout</button>
        </div>
    );
};

export default NavigationBar;