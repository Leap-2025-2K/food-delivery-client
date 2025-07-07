export const database = async (
  path: string,
  method: string = "GET",
  body: any = null
) => {
  const response = await fetch(`http://localhost:4202/${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  return response;
};
