import { useHttp } from "../hooks/http.hook";

const useCoffeeService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const getAllCoffee = async () => {
        const res = await request('http://localhost:3000/menu');
        return res;
    }

    return {
        getAllCoffee,
        process,
        setProcess,
        clearError
    };
}

export default useCoffeeService;