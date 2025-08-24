import { useHttp } from "../hooks/http.hook";

const useCoffeeService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const getAllCoffee = async () => {
        const res = await request('http://localhost:3000/menu');
        return res;
    }

    const getOneCoffee = async (id) => {
        console.log('res');
        const res = await request(`http://localhost:3000/menu/${id}`);
        console.log('res');
        return res;
    } 

    return {
        getAllCoffee,
        process,
        setProcess,
        clearError,
        getOneCoffee
    };
}

export default useCoffeeService;