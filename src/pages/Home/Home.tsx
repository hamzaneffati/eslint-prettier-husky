import { GET_COUNTRIES } from "../../graphql/queries";
import { useGQLQuery } from "../../hooks/useGQLQuery";

export const Home = () => {
  const { status, data } = useGQLQuery("countries", GET_COUNTRIES);
  console.log("🚀 ~ file: Home.tsx ~ line 6 ~ Home ~ data", data);

  if (status === "loading") {
    return <>Loading 🐞 ...</>;
  }
  if (status === "error") {
    return <>Somthing went wrong ⚠ ...</>;
  }

  return (
    <>
      {data.countries.map((res: any) => (
        <p>{res.name}</p>
      ))}
    </>
  );
};
