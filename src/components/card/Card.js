import './card.scss';

const Card = (props) => {
    const {img, name, country, price, isBest} = props;

    const countryRender = <p className='card__country'>{country}</p>;

    return (
        <div className={isBest ? "card card_best" : "card card_base"}>
            <img src={img} alt="Coffee" className='card__img'/>
            <div className="card__wrapper">
                <h3 className="card__name">{name}</h3>
                {country ? countryRender : null}
                <p className='card__price'>{price}</p>
            </div>
        </div>
    )
}

export default Card;