const development = {
  url: "http://localhost:4000/items",
};

const production = {
  url: "https://bolsonvegetal-iqs3.onrender.com/items",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
