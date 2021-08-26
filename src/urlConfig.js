export const baseUrl = "https://flipkart-back-end-server.herokuapp.com/"

//export const api = 'http://localhost:2000/api';
export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
}