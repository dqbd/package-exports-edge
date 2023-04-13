export default async (request) => {
  return new Response("Hello, World!");
};

export const config = { path: "/edge" };
