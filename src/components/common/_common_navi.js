import styled from 'styled-components';
import { Link } from 'react-router-dom';


import mealSalad from '../../assets/svg/navi_kit.svg';
import innerBeauty from '../../assets/svg/navi_beauty.svg';
import beverage from '../../assets/svg/navi_drink.svg';
import seafood from '../../assets/svg/navi_seaweed.svg';

// 아이콘 매핑
const iconMap = {
  mealSalad,
  innerBeauty,
  beverage,
  seafood
};

export const Allmenulist = styled(Link)`
  display: flex;
  width: 187px;
  padding: var(--Space-200, 8px) var(--Space-400, 16px);
  align-items: center;
  gap: var(--Space-200, 8px);
  color: var(--font-basic);
  background-color: var(--color--bg-white);
  white-space:nowrap;

  &:hover {
    background-color: var(--color--bg-sub01, #edf6f6);
    color: var(--primary);
  }

  &:before {
    content: "";
    width: 24px; /* 아이콘 크기 */
    height: 24px;
    background-image: ${({ to }) => `url(${iconMap[to]})`}; // object 키를 상수화로 그대로 받아서 연동할 수 있음
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
  }
`