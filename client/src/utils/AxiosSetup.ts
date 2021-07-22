import axios, { Method } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

interface AxiosValue {
  method: Method;
  url: string;
  data?: any;
}
const axiosSetup = async (
  value: AxiosValue,
  res: (value: any) => void,
  error: (value: any) => void
) => {
  try {
    const r = await axiosInstance(value);

    res(r.data);
  } catch (e: any) {
    error(e.response);
  }
};

export default axiosSetup;
