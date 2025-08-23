import AppHeader from '../appHeader/AppHeader';
import Divider from '../divider/Divider';

import coffee from '../../resources/icons/coffee-beans-menu.svg';
import './coffeeHouse.scss';

const CoffeeHouse = () => {
    return (
        <div className="main">
            <AppHeader className='app__menu_header' coffee={coffee}/>
            <h1 className='main__title'>Everything You Love About Coffee</h1>
            <Divider coffee={coffee} isWhite={true}/>
            <h2 className="main__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="main__subtitle main__subtitle_shadow">Want to try our beans?</h2>
            <button className='main__btn'>More</button>
        </div>
    )
}

export default CoffeeHouse;