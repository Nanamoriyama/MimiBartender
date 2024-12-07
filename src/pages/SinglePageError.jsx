import { useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  console.error(error); // エラー内容を確認
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{error?.message || "An unknown error occurred"}</h2>
      <p>
        Return to the <a href="/">Home Page</a>.
      </p>
    </div>
  );
};
export default SinglePageError;
