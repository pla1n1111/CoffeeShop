import { Link } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = (props) => {
    return (
        <nav className={`app__menu ${props.className}`}>
            <img src={props.coffee} alt="coffee-beans" />
            <ul>
                <li><Link to='/'>Coffee house</Link></li>
                <li><Link to='/ourcoffee'>Our Coffee</Link></li>
                <li><Link to='/pleasure'>For your pleasure</Link></li>
            </ul>
        </nav>
    )
}

export default AppHeader;