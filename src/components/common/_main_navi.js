import styled from 'styled-components';
import { Link } from 'react-router-dom';


import mealSalad from '../../assets/svg/kit.svg'; // 밀키트
import beverage from '../../assets/svg/drink.svg'; // 음료
import lunchBox from '../../assets/svg/meal.svg'; // 밥면
import seafood from '../../assets/svg/seaweed.svg'; // 해조류

import subscription from '../../assets/svg/delevery.svg' // 정기배송
import specialEvent from '../../assets/svg/promotion.svg' //기획전
import recipe from "../../assets/svg/recipe.svg" // 레시피
import store from '../../assets/svg/store.svg' // 매장찾기
import gift from "../../assets/svg/gift.svg" // 선물하기
import event from "../../assets/svg/event.svg" // 이벤트
import coupon from "../../assets/svg/coupon.svg"



// 아이콘 매핑
const mainIconMap = {
  mealSalad,
  specialEvent,
  recipe,
  subscription,
  beverage,
  seafood,
  lunchBox,
  store,
  gift,
  event,
  coupon
};

export const MainQuickmenu = styled(Link)`
    display:block;
    width: 75px;
    height: 75px;
    border-radius: 55px;
    border: 1.2px solid #EEE;
    background-color: #F6FAF9;
     background-image: ${({ to }) => `url(${mainIconMap[to]})`};
    background-size: ${({ w }) => (w ? w + "px" : 47.58+"px")};
    background-repeat: no-repeat;
    background-position: center;

  &:hover {
    border-color: #E9ECE8;
    background-color: #EAF4F3;   
  } 
`



