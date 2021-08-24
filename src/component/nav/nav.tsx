import './nav.scss';

import LoginBUtton from './loginButton/loginButton';
///
///
///

function Nav() {
    return (
        <nav className="nav">
            <p className="logo">Todo List</p>
            
            <LoginBUtton />
        </nav>
    )
}

export default Nav