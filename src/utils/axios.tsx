import axios, { AxiosInstance } from 'axios';

// Create a new Axios instance with custom configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://wda-services.onrender.com/api/v1/order", // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json', // Set default content type (JSON in this case)
  },
});



// Optional: Add response interceptors or other configurations as needed

export default axiosInstance;
