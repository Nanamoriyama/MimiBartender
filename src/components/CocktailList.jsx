import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  console.log("Received drinks:", drinks); // デバッグ用ログ

  const drinkList = Array.isArray(drinks) ? drinks : [];

  // データが空の場合の処理
  if (drinkList.length === 0) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  // データを整形
  const formattedDrinks = drinkList.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  // カードを表示
  return (
    <Wrapper>
      {formattedDrinks.map((item) => (
        <CocktailCard key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default CocktailList;
