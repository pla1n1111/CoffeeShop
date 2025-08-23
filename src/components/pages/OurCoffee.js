import AboutBeans from "../aboutBeans/AboutBeans";
import Cards from "../cards/Cards";
import Filters from "../filters/Filters";
import Footer from "../footer/Footer";
import OurHead from "../ourHead/OurHead";


const OurCoffee = () => {
    return (
        <>
            <OurHead/>
            <AboutBeans/>
            <Filters/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default OurCoffee;