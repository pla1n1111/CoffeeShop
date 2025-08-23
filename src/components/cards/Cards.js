import Card from '../card/Card';
import useCoffeeService from '../../services/CoffeeService';

import './cards.scss';
import { useEffect, useState } from 'react';

const Cards = () => {

    const [coffeeList, setCoffeeList] = useState([]);

    const {getAllCoffee, process, setProcess} = useCoffeeService();

    useEffect(() => {
        onRequest();
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
                <li key={i} className='cards__card'><Card img={item.img}
                    name={item.name}
                    price={item.price}
                    country={item.country}
                    isBest={false}/></li>
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