import axios from 'axios';

const RequestCharacter = async () => {
    try {
        const fetch = await axios.get('https://rickandmortyapi.com/api/character/');
        const response = fetch.data.results;
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export default RequestCharacter;