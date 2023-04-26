import { API_HOST } from '../utils/constants'

export async function getPokemonApi (endPointUrl){
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endPointUrl  || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}


export async function getPokemonDetailsByUrlApi (url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailByIdApi (id) {
    try {
        const response = await fetch(`${API_HOST}/pokemon/${id}`)
        const result = await response.json();
        return result
    } catch (error) {
        throw error;
    }
}
