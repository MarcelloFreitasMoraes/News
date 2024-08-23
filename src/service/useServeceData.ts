import http from "../config/axios";

type Country = "us" | "pt";

export class Newservice {
  async fetchBusiness({ country = "us" }: { country: Country }) {
    const { data } = await http.get(
      `/top-headlines?country=${country}&category=business&apiKey=${
        import.meta.env.VITE_PUBLIC_API_BASE_KEY
      }`
    );
    return data;
  }

  async fetchAllCartMovies() {
    const { data } = await http.get("/frutas/checkout.json");
    return data;
  }
}
