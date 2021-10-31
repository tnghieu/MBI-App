const { REACT_APP_BACKEND_PORT } = process.env;
const API_URL = `/.netlify/functions/app`;
const LOCAL_BASE_URL = `http://localhost:${REACT_APP_BACKEND_PORT}${API_URL}`;
const SERVER_BASE_URL = `https://mbi-server.netlify.app${API_URL}`;
const VERIFY_MBI_URL = `${LOCAL_BASE_URL}/verify`;
const GENERATE_MBI_URL = `${LOCAL_BASE_URL}/generate`;

export {
    VERIFY_MBI_URL,
    GENERATE_MBI_URL,
}