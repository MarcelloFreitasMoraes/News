import http from "../config/axios";

export class Newservice {
  async fetchBusiness(name: string ) {
    const { data } = await http.get(
      `/everything?domains=wsj.com?name=${name}&apiKey=${
        import.meta.env.VITE_PUBLIC_API_BASE_KEY
      }`
    );
    return data;
  }

  async fetchCnnBrasil() {
    const { data } = await http.get(
      `/everything?domains=wsj.com&apiKey=${
        import.meta.env.VITE_PUBLIC_API_BASE_KEY
      }`
    );
    return data;
  }
}
