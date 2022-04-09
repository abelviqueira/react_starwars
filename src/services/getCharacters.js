import {API_URL} from './settings';

export async function getAllCharacters () {    
    try {
        const response = await fetch(`${API_URL}/people/`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getCharacterByID (id) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }   
}