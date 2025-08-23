import AppHeader from '../appHeader/AppHeader';
import Divider from '../divider/Divider';
import coffee from '../../resources/icons/coffee-beans-main-black.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <AppHeader className='app__menu_footer' coffee={coffee}/>
            <Divider coffee={coffee} isWhite={false}/>
        </footer>
    )
}

export default Footer;