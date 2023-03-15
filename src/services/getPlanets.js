import {SWAPI_API_URL} from 'services/settings';

export async function getAllPlanets () {
    try {
        const response = await fetch(`${SWAPI_API_URL}/planets/`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPlanetsByName (id) {
    try {
        const response = await fetch(`${SWAPI_API_URL}/planets/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}