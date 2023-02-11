import { CurrentBankomat } from "./CurrentBankomat";
import { MoneyType } from "./App";
import styled, { css } from "styled-components";

type CityPropsType = {
  data: MoneyType[];
};

export const City = (props: CityPropsType) => {
  const mappedMoney = props.data.map((el) => {
    return <CurrentBankomat key={el.number} money={el} />;
  });
  return <Wrapper>{mappedMoney}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`;

//2
// Отлично, но теперь давайте совсем все сделаем по красоте. Вынесем верстку в отдельную компоненту и ее замапим!
// Ну и наконец давайте версточку натянем, для этого будем использовать StyledComponents
// yarn add styled-components
// yarn add @types/styled-components

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке
