import Divider from '../divider/Divider';

import coffee from '../../resources/icons/coffee-beans-main-black.svg';
import './singleAbout.scss';

const SingleAbout = ({data}) => {

    return (
        <div className="single">
                <img src={data.bigImg} alt="coffee" className="single__img" />
                <div className="single__wrapper">
                    <h2 className="single__subtitle">About it</h2>
                    <Divider coffee={coffee} isWhite={false}/>
                    <p className="single__text"><span className="single__span">Country: </span>{data.country}</p>
                    <br />
                    <p className="single__text"><span className="single__span">Description: </span>{data.descr}</p>
                    <br />
                    <p className="single__text"><span className="single__span">Price: </span>
                    <span className="single__price">{data.price}</span></p>
            </div>
        </div>
    )
}
export default SingleAbout;