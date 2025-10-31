
export const FetchUsers = async () => {
  const dataFetch = await fetch("https://dummyjson.com/users");
  const dataRes = await dataFetch.json();
  return dataRes.users;
};
