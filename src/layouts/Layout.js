import NavigationBar from "../components/NavigationBar";
import { signUserOut, useAuthState } from '../firebase';

const Layout = (props) => {

    const user = useAuthState();

    return (
        <div className="Skeleton">
            <header className="Skeleton-header">
                <NavigationBar user={user} onSignOut={signUserOut} />
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default Layout;