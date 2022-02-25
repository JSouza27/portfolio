import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://gitconnected.com/v1/portfolio/jsouza27';

const getInfo = async () => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    toast.error(e);
  }
};

export default getInfo;
