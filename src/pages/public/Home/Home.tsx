import { GET_COUNTRIES } from "../../../graphql/queries";
import { useGQLQuery } from "../../../hooks/useGQLQuery";
import "./Home.scss";

export const Home = () => {
  const { status, data } = useGQLQuery("countries", GET_COUNTRIES);

  if (status === "loading") {
    return <>Loading 🐞 ...</>;
  }
  if (status === "error") {
    return <>Somthing went wrong ⚠ ...</>;
  }

  return (
    <div className="country">
      {data.countries.map((res: any) => (
        <p key={res.name}>{res.name}</p>
      ))}
    </div>
  );
};
