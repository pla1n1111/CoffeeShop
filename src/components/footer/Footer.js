import AppHeader from '../appHeader/AppHeader';
import Divider from '../divider/Divider';
import coffee from '../../resources/icons/coffee-beans-main-black.svg';
import blackCoffee from '../../resources/icons/coffee-beans-menu-black.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <AppHeader className='app__menu_footer' coffee={blackCoffee}/>
            <Divider coffee={coffee} isWhite={false}/>
        </footer>
    )
}

export default Footer;