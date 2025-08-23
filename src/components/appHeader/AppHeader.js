import './appHeader.scss';

const AppHeader = (props) => {
    return (
        <nav className={`app__menu ${props.className}`}>
            <img src={props.coffee} alt="coffee-beans" />
            <ul>
                <li>Coffee House</li>
                <li>Our Coffee</li>
                <li>For your pleasure</li>
            </ul>
        </nav>
    )
}

export default AppHeader;