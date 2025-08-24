import Card from '../card/Card';
import useCoffeeService from '../../services/CoffeeService';

import './cards.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Cards = () => {

    const [coffeeList, setCoffeeList] = useState([]);

    const {getAllCoffee, setProcess} = useCoffeeService();

    useEffect(() => {
        onRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onRequest = () => {
        getAllCoffee().then(onCoffeeLoaded)
        .then(() => setProcess('confirmed'));
    }

    const onCoffeeLoaded = (newCoffeeList) => {
        setCoffeeList([...coffeeList, ...newCoffeeList]);
    }

    const renderAllCoffee = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <Link to={`/${item.id}`}>
                <li key={i} className='cards__card'><Card img={item.img}
                    name={item.name}
                    price={item.price}
                    country={item.country}
                    isBest={false}/></li></Link>
            )
        }
    )

    return (
        <ul className='cards'>
            {items}
        </ul>
    )
};

    return (
        renderAllCoffee(coffeeList)
    )
}

export default Cards;