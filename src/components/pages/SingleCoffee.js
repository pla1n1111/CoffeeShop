import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCoffeeService from "../../services/CoffeeService";
import Head from "../head/Head";
import setContent from "../../utils/setContent";

import SingleAbout from "../singleAbout/SingleAbout";
import Footer from "../footer/Footer";


const SingleCoffee = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {getOneCoffee, clearError, process, setProcess} = useCoffeeService();

    useEffect(() => {
        console.log('sas');
        updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const updateData = () => {
        clearError();
        getOneCoffee(id).then(onDataLoaded)
        .then(() => setProcess('confirmed'));
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    return (
        <>
            <Head className="head_our" title="Our Coffee"/>
            {setContent(process, SingleAbout, data)}
            <Footer/>
        </>
    )
}

export default SingleCoffee;