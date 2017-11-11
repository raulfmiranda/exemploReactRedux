import axios from 'axios';

const apiUrl = 'http://localhost:3001/devs';

const generateId = (dev) => {
  return dev.nome.toLowerCase() + '-' + dev.sobrenome.toLowerCase();
};

class DevApi {
  static getAllDevs() {
    
    return axios.get(apiUrl);
  }

  static saveDev(dev) {

    if (dev.id) {
      return axios.put(apiUrl + dev.id, dev);
    } else {
      dev.id = generateId(dev);
      return axios.post(apiUrl, dev);
    }
  }

}

export default DevApi;