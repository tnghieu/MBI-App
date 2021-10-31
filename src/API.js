import { VERIFY_MBI_URL, GENERATE_MBI_URL } from "./config";
import axios from "axios";

export async function verifyMBI(mbiToValidate) {
    const response = await axios.post(`${VERIFY_MBI_URL}`, { mbi: mbiToValidate })
        .then(response => response.data)
        .catch(error => { throw error });
    return response;
}

export async function generateMBI() {
    const response = await axios.get(`${GENERATE_MBI_URL}`)
        .then(response => response.data)
        .catch(error => { throw error });

    return response;
}
