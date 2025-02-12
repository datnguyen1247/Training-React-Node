import { useEffect } from "react";
import authApi from "../../api/authApi";

export default function HomePage() {
  useEffect(() => {
    const fetchApi = async () => {
      const response = await authApi.fakeLogin();
      localStorage.setItem("token", JSON.stringify(response.token));
    };
    fetchApi();
  }, []);
  return <div>HomePage</div>;
}
