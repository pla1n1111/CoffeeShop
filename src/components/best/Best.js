import Card from '../card/Card';

import './best.scss';

const Best = () => {
    return (
        <div className="best">
            <h2 className="best-title">Our best</h2>
            <div className="best__cards">
                <Card img={require('../../resources/img/solimo-beans.jpg')}
                    name="Solimo Coffee Beans 2 kg"
                    price="10.73$"/>
                <Card img={require('../../resources/img/presto-beans.jpg')}
                    name="Presto Coffee Beans 1 kg"
                    price="15.99$"/>
                <Card img={require('../../resources/img/aromistico-coffee.jpg')}
                    name="AROMISTICO Coffee 1 kg"
                    price="6.99$"/>
            </div>
        </div>
    )
}

export default Best;