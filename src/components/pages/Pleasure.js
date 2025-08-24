import Head from "../head/Head";
import About from "../about/About";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";

const Pleasure = () => {
    return (
        <>
            <Head title="For your pleasure" className="head_pleasure"/>
            <About img="/img/hot-coffee.jpg"
                title="About our goods"
                firstText="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                secondText="Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. "
                thirdText="As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face."/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Pleasure;