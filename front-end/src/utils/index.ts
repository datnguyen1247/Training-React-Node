export const getToken = () => localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token") || '')
  : null;