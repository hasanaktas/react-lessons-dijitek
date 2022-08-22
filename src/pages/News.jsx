import { useNavigate, Link } from "react-router-dom";
import news from "../news";

const NewsPage = () => {
  //   const navigate = useNavigate();

  return (
    <div>
      <h2>NewsPage</h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {news.map((item) => {
          return (
            <Link
              key={item.id}
              style={{
                backgroundColor: "rgb(245,245,245)",
                marginBottom: 10,
              }}
              to={`/news/${item.id}`}
            >
              <p>{item.id}</p>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;
