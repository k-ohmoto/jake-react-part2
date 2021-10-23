import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <h1>404</h1>
      <p>ページが見つかりません</p>
      <Link to="/">ホームへ</Link>
    </>
  );
};
