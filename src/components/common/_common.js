import styled from "styled-components";

// 더보기
const svgPlus = encodeURIComponent(`
<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M10 4.83329H6V0.833293C6 0.656482 5.92976 0.486913 5.80474 0.361888C5.67971 0.236864 5.51014 0.166626 5.33333 0.166626C5.15652 0.166626 4.98695 0.236864 4.86193 0.361888C4.7369 0.486913 4.66667 0.656482 4.66667 0.833293V4.83329H0.666667C0.489856 4.83329 0.320287 4.90353 0.195262 5.02855C0.070238 5.15358 0 5.32315 0 5.49996C0 5.67677 0.070238 5.84634 0.195262 5.97136C0.320287 6.09639 0.489856 6.16663 0.666667 6.16663H4.66667V10.1666C4.66667 10.3434 4.7369 10.513 4.86193 10.638C4.98695 10.7631 5.15652 10.8333 5.33333 10.8333C5.51014 10.8333 5.67971 10.7631 5.80474 10.638C5.92976 10.513 6 10.3434 6 10.1666V6.16663H10C10.1768 6.16663 10.3464 6.09639 10.4714 5.97136C10.5964 5.84634 10.6667 5.67677 10.6667 5.49996C10.6667 5.32315 10.5964 5.15358 10.4714 5.02855C10.3464 4.90353 10.1768 4.83329 10 4.83329Z" fill="#222222"/>
</svg>
`);

const svgMore = encodeURIComponent(`
<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector 36" d="M1.38169 0.677029C1.20332 0.466226 0.887832 0.439935 0.677029 0.618307C0.466226 0.796679 0.439935 1.11217 0.618307 1.32297L1.38169 0.677029ZM6.5 7.5L6.88169 7.82297L7.15498 7.5L6.88169 7.17703L6.5 7.5ZM0.618307 1.32297L6.11831 7.82297L6.88169 7.17703L1.38169 0.677029L0.618307 1.32297ZM6.11831 7.17703L0.618307 13.677L1.38169 14.323L6.88169 7.82297L6.11831 7.17703Z" fill="#222222"/>
</svg>
`);

export const Plusbtn = styled.button`
  display: flex;
  height: 41px;
  padding: var(--Space-200, 8px) var(--height-32px, 32px);
  line-height: 1;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 41px;
  border: 1px solid var(--color--stoke, #ccc);
  background: #FFF;

  &:hover {
    border-color: var(--primary, #24C57A);
    background: #F5FAF9;

    &::after {
      transform: ${(props) =>
      props.icon === "plus" ? "rotate(-90deg)" : "translateX(5px)"};
      content: ${(props) =>
        `url("data:image/svg+xml,${props.icon === "plus" ? svgPlus : svgMore}")`};  
    }
   
  }

  &::after {
    content: ${(props) =>
      `url("data:image/svg+xml,${props.icon === "plus" ? svgPlus : svgMore}")`};  
    transition: 0.4s;
  }
`;


export const Tabbtn = styled.button`
      display: inline-flex;
      height: 35px;
      padding: var(--Space-200, 8px) 18px;
      justify-content: center;
      align-items: center;
      gap: 10px;     
      border-radius: 29px;
      background: var(--color--bg-white, #FFF);
      color: varl(--color--text-primary);
      &:hover{
        background: var(--primary);
        color: var(--color--bg-white, #FFF);
      }
      &.act{

      }
`

