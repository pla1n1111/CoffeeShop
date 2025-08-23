import Divider from '../divider/Divider';

import girl from '../../resources/img/girl.jpg';
import coffee from '../../resources/icons/coffee-beans-main-black.svg';
import './aboutBeans.scss';

const AboutBeans = () => {
    return (
        <div className="beans">
            <img src={girl} alt="girl with coffee" className="beans__img" />
            <div className="beans__wrapper">
                <h2 className="beans__subtitle">About our beans</h2>
                <Divider coffee={coffee} isWhite={false}/>
                <p className="beans__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                <br />
                <p className="beans__text">Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. </p>
                <p className="beans__text">As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
            </div>
        </div>
    )
}

export default AboutBeans;