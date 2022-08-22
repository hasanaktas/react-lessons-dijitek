import { useParams } from "react-router-dom";
import news from "../news";

const NewDetail = () => {
  const { newId } = useParams();

  const findedNew = news.find((item) => item.id === parseInt(newId));

  return (
    <div>
      {!findedNew ? (
        <h6>Haber Bulunamadi</h6>
      ) : (
        <div>
          <h6>{findedNew.title}</h6>
          <p>{findedNew.content}</p>
        </div>
      )}
    </div>
  );
};

export default NewDetail;
