// const rootUrl = "http://localhost:5000";
const rootUrl = "https://bookxpert.onrender.com";

export const getConfig = () => ({
  baseUrl: rootUrl,
  authUrl: `${rootUrl}/auth`,
  contactUrl: `${rootUrl}/contact`,
});
