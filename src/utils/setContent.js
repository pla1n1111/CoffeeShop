import Spinner from "../components/spinner/spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const setContent = (process, SingleAbout, data) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <SingleAbout data={data}/>
        case 'error':
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;