import Divider from '../divider/Divider';

import coffee from '../../resources/icons/coffee-beans-main-black.svg';
import './about.scss';

const About = (props) => {
    return (
        <>
            <div className="beans">
            <img src={props.img} alt="desc" className="beans__img" />
            <div className="beans__wrapper">
                <h2 className="beans__subtitle">{props.title}</h2>
                <Divider coffee={coffee} isWhite={false}/>
                <p className="beans__text">{props.firstText}</p>
                <br />
                <p className="beans__text">{props.secondText}</p>
                <p className="beans__text">{props.thirdText}</p>
                </div>
            </div>
            <hr className='custom-hr'/>
        </>
    )
}

export default About;