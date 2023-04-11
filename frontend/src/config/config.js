// const rootUrl = "http://localhost:5000";
const rootUrl = "https://book-expert-demo.onrender.com";

export const getConfig = () => ({
  baseUrl: rootUrl,
  authUrl: `${rootUrl}/auth`,
  contactUrl: `${rootUrl}/contact`,
});
