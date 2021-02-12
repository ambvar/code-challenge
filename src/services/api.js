import axios from "axios";

const uri = "https://codechallenge.rivet.work/api/v1";

export default {
  async get(path)  {
    let res = await axios.get(uri + path, { 
      headers: { 
        token: "20fd8a122479d85f44d723e47595243427478a25721d8674ddc2eb0b4e436d6e" 
      }
    }).catch((err) => {
      console.log(err);
      return err;
    });
    return res.data;
  },

  async post(path, data) {
    let res = await axios.post(uri + path, data, {
      headers: { 
        token: "20fd8a122479d85f44d723e47595243427478a25721d8674ddc2eb0b4e436d6e" 
      }
    }).catch((err) => {
      console.log(err);
      return err;
    });
    return res.data;
  },

  async put(path, data) {
    let res = await axios.put(uri + path, data, {
      headers: { 
        token: "20fd8a122479d85f44d723e47595243427478a25721d8674ddc2eb0b4e436d6e" 
      }
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res.data;
  },
}