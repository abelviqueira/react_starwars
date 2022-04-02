import {API_URL} from 'services/settings';

export default function getCharacters () {
    const apiURL = `${API_URL}`;
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response;
            console.log(data);
            if(Array.isArray(data)) {
                const characters = data.map(image => {
                    const {images, title, id} = image
                    const { url } = images.downsized_medium;
                    return { title, id, url }
                });
                return characters;
            }
        })
}