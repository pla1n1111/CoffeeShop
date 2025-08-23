import AppHeader from '../appHeader/AppHeader';

import coffee from '../../resources/icons/coffee-beans-menu.svg';
import './ourHead.scss';

const OurHead = () => {
    return (
        <div className="our">
            <AppHeader className='app__menu_header' coffee={coffee}/>
            <h1 className="our__title">Our Coffee</h1>
        </div>
    )
}

export default OurHead;