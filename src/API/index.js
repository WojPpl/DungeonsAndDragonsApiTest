import axios from 'axios';

const fetcher = url => {
        return axios({
            "method": "GET",
            "url": url
        })
};

export default fetcher;