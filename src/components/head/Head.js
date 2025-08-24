import AppHeader from '../appHeader/AppHeader';

import coffee from '../../resources/icons/coffee-beans-menu.svg';
import './head.scss';

const Head = (props) => {
    return (
        <div className={`head ${props.className}`}>
            <AppHeader className='app__menu_header' coffee={coffee}/>
            <h1 className="head__title">{props.title}</h1>
        </div>
    )
}

export default Head;