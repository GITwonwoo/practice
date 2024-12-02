import React, { forwardRef } from "react";
import styled from 'styled-components';
import icon from './_icon.module.scss'
import { Link } from 'react-router-dom';



const SvgprothumbLink = styled(Link)`
width: 42px;
height: 42px;
border-radius: 27px;
background: var(--color--bg-white, #FFF);
display:flex;
justify-content : center;
align-items : center;
    &.type2{   
        background: #D9D9D9;
    }
    
`


const SvgIconbtn = styled.button`
  width: ${(props) =>  props.size[0] ? props.size[0]+'px' : '24px' };
  height: ${(props) =>  props.size[0] ? props.size[1]+'px' : '21px' };
  border:0;
  padding:0;
  background-color:transparent; 
  color: #999999;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
 
  &.whishicon{
       &:hover{    
            #fillheart{
                fill : var(--color--icon-fill-hover, #E4E3E3)
            }        
       }
       &.active{
         path{
         fill : var(--color--discount, #F04438) !important;
         }           
       } 
  }
  &.bookmark{
       &:hover{    
            path{
                fill : var(--color--icon-fill-hover, #E4E3E3)
            }        
       }
       &.active{
         path{
         fill : var(--color--labeld, #F79009) !important;
         stroke : var(--color--labeld, #F79009) !important;
         }           
       } 
  }
  &.comment{
       &:hover{    
            path:nth-child(1){
                fill : var(--color--icon-fill-hover, #E4E3E3)
            }        
       }
       &.active{
         path:nth-child(1){
         fill : var(--color--labels, #F79009) !important;
         stroke : var(--color--labels, #F79009) !important;
         }           
       } 
  }
 &.rateBt{
       &:hover{    
            path{
                fill: var(--color--icon-line, #999);
            }        
       }
       &.active{
         path{
         fill : var(--primary) !important;
        
         }           
       } 
  }
  &.snsicon{
  
       &:hover{    
            path{
                fill-opacity: 1;
            }        
       }
     
  }
  &.radio{

       }
  &.chkbox{
  
  }

`;

const SvgIconlabel = styled.label`
  display:block;
  width: ${(props) =>  props.size?.[0] ? props.size[0]+'px' : '20px' };
  height: ${(props) =>  props.size?.[0] ? props.size[1]+'px' : '20px' };
  border:0;
  background-color:transparent; 
  color: #999999;
  font-size: 12px;
  white-space:nowrap;  
  font-family: Pretendard;
  font-weight: 400;
  

  &.formlabel{
     &.pw{
      display: flex;
      width: 22px;
      height: 20px;     
      justify-content: center;
      align-items: center;

           svg:nth-child(1){
            display:block;
            }
           svg:nth-child(2){
           display:none;
           }
           &:hover{
            svg:nth-child(1){
            display:none;
            }
            svg:nth-child(2){
            display:block;
            }           
           }
        }
    &.active{   
      &.radio{
        rect:nth-child(1){
           fill : #24C57A;
           stroke : #24C57A;
        }
      }
      &.chkbox{
        rect:nth-child(1){
           fill : #24C57A;
           stroke : #24C57A;
        }
      }
        
    }
  
  }
`;
// useRef 사용하는 컴포넌트
export const Wishheart =forwardRef( ({className}, ref) =><SvgIconbtn size={[25, 21]} className={` ${className} whishicon`} ref={ref} >
  
        <svg width="25" height="21"   viewBox="0 0 25 21" fill="none" className={icon.default} >
        <path id="fillheart" d="M12.0744 20.4849C11.9379 20.4849 11.8119 20.4324 11.7174 20.3274L2.18358 10.4997C1.0496 9.3342 0.451116 7.70674 0.524614 6.04777C0.608612 4.37831 1.3436 2.86635 2.59307 1.79537C3.55904 0.97639 4.74552 0.5354 6.04749 0.5354C7.63295 0.5354 9.20792 1.20738 10.3419 2.39386L12.0639 4.16832L13.7858 2.39386C14.9303 1.21788 16.4947 0.5354 18.0802 0.5354C19.3717 0.5354 20.5687 0.965891 21.5346 1.79537C22.7946 2.86635 23.5296 4.37831 23.6031 6.04777C23.6871 7.70674 23.0781 9.3237 21.9441 10.4997L12.4208 20.3379C12.3263 20.4429 12.1898 20.4954 12.0639 20.4954L12.0744 20.4849Z" fill="#F0F0F0"/>
        <path id="lineheart" d="M18.1012 1.06048C19.2667 1.06048 20.3377 1.44897 21.2091 2.19445C22.3536 3.17093 23.0256 4.5464 23.0991 6.07936C23.1726 7.59133 22.6161 9.07179 21.5871 10.1428L12.0953 19.981L2.56157 10.1323C1.53259 9.06129 0.976102 7.58083 1.0496 6.06886C1.1231 4.5464 1.79508 3.17093 2.93956 2.19445C3.81104 1.45947 4.88201 1.06048 6.04749 1.06048C7.49645 1.06048 8.92442 1.67996 9.9639 2.76144L10.9299 3.75891L11.3079 4.14741L12.0638 4.92439L12.8198 4.14741L13.1978 3.75891L14.1638 2.76144C15.2138 1.67996 16.6417 1.06048 18.0907 1.06048M6.05799 0.0104998C4.70352 0.0104998 3.35955 0.461989 2.26757 1.39647C-0.598862 3.83241 -0.745859 8.21081 1.81608 10.8568L11.3394 20.695C11.5389 20.905 11.8119 21.01 12.0743 21.01C12.3368 21.01 12.6098 20.905 12.8093 20.695L22.3326 10.8568C24.8946 8.21081 24.7476 3.83241 21.8916 1.38597C20.7996 0.45149 19.4557 0 18.1012 0C16.4107 0 14.7098 0.692984 13.4288 2.01595L12.4628 3.01343L12.0848 3.40192L11.7069 3.01343L10.7409 2.01595C9.45991 0.692984 7.75895 0 6.06849 0L6.05799 0.0104998Z" fill="#CCCCCC"/>
        </svg>
        
    </SvgIconbtn>)

export const BookmarkBt =forwardRef( ({className}, ref) => <SvgIconbtn size={[24, 30]} className={`${className} bookmark`}  ref={ref}>
  
  <svg  width="24" height="30" viewBox="0 0 24 30" fill="none">
  <path d="M21.3333 0.5C22.1618 0.5 22.8333 1.17157 22.8333 2V26.2035C22.8333 27.4105 21.4804 28.1232 20.485 27.4406L13.0805 22.3632C12.2285 21.779 11.1049 21.779 10.2528 22.3632L2.84829 27.4406C1.85289 28.1232 0.5 27.4105 0.5 26.2035V2C0.5 1.17157 1.17157 0.5 2 0.5H21.3333Z" fill="#F0F0F0" stroke="#CCCCCC"/>
</svg>
    
</SvgIconbtn>)

export const CommentBt = () => <SvgIconbtn size={[30, 30]} className='comment'>
  
  <svg width="30" height="30"	 viewBox="0 0 30 30" >

  <path  fill='#F0F0F0' stroke="#CCCCCC" d="M29.5,15c0,3.5-1.3,6.7-3.3,9.2c-0.5,0.6-0.5,1.4,0,2l2.1,2.5c0.3,0.3,0,0.8-0.4,0.8H15
    c-8.5,0-15.3-7.3-14.4-15.9l0,0c0.7-6.9,6.1-12.4,13-13l0,0C22.2-0.3,29.5,6.5,29.5,15z"/>
  <path  fill='#CCCCCC' d="M14.9,16.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C16.3,15.8,15.7,16.4,14.9,16.4
    z"/>
  <path  fill='#CCCCCC'  d="M9.5,16.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4C10.8,15.8,10.2,16.4,9.5,16.4z"/>
  <path   fill='#CCCCCC'  d="M20.4,16.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C21.7,15.8,21.1,16.4,20.4,16.4
    z"/>
</svg>
    
</SvgIconbtn>

export const RateBt = (props) => <SvgIconbtn size={[22, 21]} className={`rateBt  ${props.className}`}>
  
  <svg  width="22" height="21" viewBox="0 0 22 21" fill="none">
  <path d="M10.4833 17.1089C10.8011 16.9171 11.1989 16.9171 11.5167 17.1089L15.769 19.6754C16.5263 20.1325 17.4605 19.4535 17.2596 18.592L16.1311 13.7548C16.0468 13.3933 16.1696 13.0148 16.4502 12.7718L20.2086 9.51589C20.8772 8.93668 20.5198 7.83842 19.6384 7.76364L14.6919 7.34398C14.3223 7.31262 14.0004 7.07929 13.8557 6.73779L11.9207 2.17237C11.5761 1.35934 10.4239 1.35934 10.0793 2.17237L8.14432 6.73779C7.99958 7.07929 7.67771 7.31262 7.30814 7.34398L2.36163 7.76364C1.48021 7.83842 1.1228 8.93668 1.79139 9.51589L5.5498 12.7718C5.83036 13.0148 5.95321 13.3933 5.86887 13.7548L4.74041 18.592C4.53945 19.4535 5.47368 20.1325 6.231 19.6754L10.4833 17.1089Z" fill="#CCCCCC"/>
</svg>
    
</SvgIconbtn>


//sns
export const Syoutube = () => <SvgIconbtn size={[28, 28]} className='syoutube snsicon'>
  
  <svg  width="30" height="21" viewBox="0 0 30 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.72 3.55992C28.5535 2.93629 28.2264 2.36721 27.7714 1.90938C27.3163 1.45155 26.7493 1.12097 26.1267 0.950585C23.84 0.333252 14.6667 0.333252 14.6667 0.333252C14.6667 0.333252 5.49336 0.333252 3.2067 0.950585C2.58411 1.12097 2.01705 1.45155 1.56203 1.90938C1.10701 2.36721 0.77992 2.93629 0.613364 3.55992C3.05573e-05 5.86392 3.05176e-05 10.6666 3.05176e-05 10.6666C3.05176e-05 10.6666 3.05573e-05 15.4693 0.613364 17.7733C0.779716 18.3971 1.10671 18.9665 1.56175 19.4246C2.01678 19.8826 2.58395 20.2134 3.2067 20.3839C5.4947 20.9999 14.6667 20.9999 14.6667 20.9999C14.6667 20.9999 23.84 20.9999 26.1267 20.3839C26.7494 20.2134 27.3166 19.8826 27.7717 19.4246C28.2267 18.9665 28.5537 18.3971 28.72 17.7733C29.3334 15.4719 29.3334 10.6666 29.3334 10.6666C29.3334 10.6666 29.3334 5.86392 28.72 3.55992ZM11.6667 6.30525V15.0279L19.3334 10.6666L11.6667 6.30525Z" fill="#444444" fill-opacity="0.6"/>
</svg> 
</SvgIconbtn>

export const Sgit = () => <SvgIconbtn size={[27, 28]} className='sgit snsicon'>
<svg width="26.6" height={26.6}
	 viewBox="0 0 26.6 26.6"  >
<path fill="#444444" fill-opacity="0.6" d="M25.2,1.5c-1-1-2.2-1.5-3.5-1.5H5C3.6,0,2.4,0.5,1.5,1.5C0.5,2.4,0,3.6,0,5v16.6c0,1.4,0.5,2.6,1.5,3.5
	c1,1,2.2,1.5,3.5,1.5h3.9c0.3,0,0.4,0,0.6,0c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.6l0-1.2c0-0.8,0-1.3,0-1.8l-0.4,0.1
	C9.4,23,9,23,8.6,23c-0.4,0-0.8,0-1.2-0.1c-0.4-0.1-0.8-0.3-1.2-0.5c-0.4-0.3-0.6-0.6-0.8-1.1l-0.2-0.4C5.2,20.5,5,20.3,4.8,20
	c-0.2-0.3-0.5-0.5-0.8-0.7l-0.1-0.1c-0.1-0.1-0.2-0.1-0.2-0.2c-0.1-0.1-0.1-0.2-0.2-0.2c0-0.1,0-0.1,0.1-0.2
	c0.1-0.1,0.3-0.1,0.5-0.1l0.3,0.1c0.2,0,0.5,0.2,0.9,0.4c0.3,0.2,0.6,0.5,0.8,0.9c0.3,0.5,0.6,0.8,1,1.1c0.4,0.2,0.8,0.4,1.1,0.4
	c0.4,0,0.7,0,1-0.1c0.3-0.1,0.5-0.1,0.8-0.3c0.1-0.8,0.4-1.4,0.8-1.8c-0.6-0.1-1.2-0.2-1.8-0.3c-0.6-0.2-1.1-0.4-1.6-0.7
	c-0.5-0.3-1-0.7-1.4-1.2c-0.4-0.5-0.7-1.1-0.9-1.8c-0.2-0.8-0.4-1.6-0.4-2.6c0-1.4,0.5-2.6,1.4-3.6C5.8,8,5.8,6.8,6.3,5.5
	c0.3-0.1,0.8,0,1.5,0.2C8.5,6,8.9,6.2,9.3,6.4C9.6,6.6,9.8,6.8,10,6.9c1.1-0.3,2.2-0.5,3.3-0.5c1.1,0,2.3,0.2,3.3,0.5l0.7-0.4
	c0.5-0.3,1-0.6,1.6-0.8c0.6-0.2,1.1-0.3,1.4-0.2c0.5,1.3,0.6,2.5,0.1,3.5c0.9,1,1.4,2.2,1.4,3.6c0,1-0.1,1.9-0.4,2.6
	c-0.2,0.8-0.5,1.4-0.9,1.8c-0.4,0.5-0.9,0.9-1.4,1.2c-0.6,0.3-1.1,0.5-1.6,0.7c-0.6,0.1-1.2,0.3-1.8,0.3c0.6,0.5,0.9,1.3,0.9,2.5
	v4.1c0,0.2,0,0.4,0.1,0.5c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.4,0h3.9
	c1.4,0,2.6-0.5,3.5-1.5c1-1,1.5-2.2,1.5-3.5V5C26.6,3.6,26.2,2.4,25.2,1.5z"/>
</svg>
</SvgIconbtn>
export const Sinstar = () => <SvgIconbtn size={[30, 21]} className='sinstar snsicon'>
  
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M20.2222 0C22.285 0 24.2633 0.791175 25.7219 2.19948C27.1806 3.60778 28 5.51784 28 7.50948V19.5247C28 21.5163 27.1806 23.4264 25.7219 24.8347C24.2633 26.243 22.285 27.0341 20.2222 27.0341H7.77778C5.71498 27.0341 3.73667 26.243 2.27806 24.8347C0.819442 23.4264 0 21.5163 0 19.5247V7.50948C0 5.51784 0.819442 3.60778 2.27806 2.19948C3.73667 0.791175 5.71498 0 7.77778 0H20.2222ZM14 7.50948C12.3498 7.50948 10.7671 8.14242 9.60022 9.26906C8.43333 10.3957 7.77778 11.9238 7.77778 13.5171C7.77778 15.1104 8.43333 16.6384 9.60022 17.7651C10.7671 18.8917 12.3498 19.5247 14 19.5247C15.6502 19.5247 17.2329 18.8917 18.3998 17.7651C19.5667 16.6384 20.2222 15.1104 20.2222 13.5171C20.2222 11.9238 19.5667 10.3957 18.3998 9.26906C17.2329 8.14242 15.6502 7.50948 14 7.50948ZM14 10.5133C14.8251 10.5133 15.6164 10.8297 16.1999 11.3931C16.7833 11.9564 17.1111 12.7204 17.1111 13.5171C17.1111 14.3137 16.7833 15.0777 16.1999 15.6411C15.6164 16.2044 14.8251 16.5209 14 16.5209C13.1749 16.5209 12.3836 16.2044 11.8001 15.6411C11.2167 15.0777 10.8889 14.3137 10.8889 13.5171C10.8889 12.7204 11.2167 11.9564 11.8001 11.3931C12.3836 10.8297 13.1749 10.5133 14 10.5133ZM21 5.25664C20.5874 5.25664 20.1918 5.41487 19.9001 5.69653C19.6083 5.97819 19.4444 6.36021 19.4444 6.75853C19.4444 7.15686 19.6083 7.53887 19.9001 7.82053C20.1918 8.10219 20.5874 8.26043 21 8.26043C21.4126 8.26043 21.8082 8.10219 22.0999 7.82053C22.3917 7.53887 22.5556 7.15686 22.5556 6.75853C22.5556 6.36021 22.3917 5.97819 22.0999 5.69653C21.8082 5.41487 21.4126 5.25664 21 5.25664Z" fill="#444444" fill-opacity="0.6"/>
</svg> 
  
</SvgIconbtn>
export const Skakao = () => <SvgIconbtn size={[28, 26]} className='skakao snsicon'>
  
  <svg  width="28" height="26" viewBox="0 0 28 26" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666656 11.3333C0.666656 4.85733 6.87466 0 14 0C21.1253 0 27.3333 4.85733 27.3333 11.3333C27.3333 17.8093 21.1253 22.6667 14 22.6667C13.2987 22.6667 12.6115 22.6222 11.9387 22.5333L8.07199 25.1093C7.85259 25.2555 7.59479 25.3333 7.33118 25.3329C7.06757 25.3326 6.80997 25.2541 6.59094 25.1075C6.37191 24.9608 6.20128 24.7524 6.1006 24.5088C5.99993 24.2652 5.97373 23.9972 6.02532 23.7387L6.61866 20.7773C3.10399 18.7867 0.666656 15.356 0.666656 11.3333ZM11.3333 5.33333C11.6869 5.33333 12.0261 5.47381 12.2761 5.72386C12.5262 5.97391 12.6667 6.31305 12.6667 6.66667V16C12.6667 16.3536 12.5262 16.6928 12.2761 16.9428C12.0261 17.1929 11.6869 17.3333 11.3333 17.3333C10.9797 17.3333 10.6406 17.1929 10.3905 16.9428C10.1405 16.6928 9.99999 16.3536 9.99999 16V6.66667C9.99999 6.31305 10.1405 5.97391 10.3905 5.72386C10.6406 5.47381 10.9797 5.33333 11.3333 5.33333ZM12.6667 12.6667C12.6667 12.372 12.764 12.0773 12.96 11.8333L15.6267 8.5C15.8516 8.23656 16.1703 8.07101 16.5151 8.03841C16.86 8.0058 17.204 8.1087 17.4744 8.32532C17.7447 8.54193 17.9201 8.85525 17.9635 9.19894C18.0068 9.54263 17.9147 9.8897 17.7067 10.1667L15.7067 12.6667L17.7067 15.1667C17.8226 15.3025 17.9101 15.4602 17.964 15.6305C18.0178 15.8008 18.0369 15.9802 18.0201 16.158C18.0033 16.3358 17.9509 16.5084 17.8661 16.6656C17.7813 16.8228 17.6658 16.9613 17.5264 17.073C17.3871 17.1847 17.2267 17.2672 17.0548 17.3157C16.8829 17.3642 16.703 17.3777 16.5258 17.3553C16.3486 17.333 16.1777 17.2753 16.0233 17.1856C15.8688 17.0959 15.7339 16.9761 15.6267 16.8333L12.96 13.5C12.7704 13.2636 12.6669 12.9697 12.6667 12.6667Z" fill="#444444" fill-opacity="0.6"/>
</svg>
  
</SvgIconbtn>

//label
export const LabelR = ({ htmlFor, children, size }) => <SvgIconlabel htmlFor={htmlFor} size={size} className='formlabel radio'>  
  <svg  width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#CCCCCC"/>
    <rect x="5.33331" y="5.33325" width="9.33333" height="9.33333" rx="4.66667" fill="white"/>
  </svg>
  {children}
</SvgIconlabel>

export const LabelC = ({ htmlFor }) => <SvgIconlabel htmlFor={htmlFor}  size={[20, 20]} className='formlabel chkbox'>  
<svg  width="15" height="15" viewBox="0 0 15 15" fill="none">
  <rect x="0.5" y="0.5" width="14" height="14" rx="1.5" fill="white" stroke="#CCCCCC"/>
  <path d="M10.8282 4.50033L6.76776 8.69307L5.16562 7.03568L5.16566 7.03565L5.16231 7.03232C5.08409 6.9544 4.99132 6.89272 4.88912 6.85119C4.7869 6.80965 4.67749 6.78918 4.5672 6.79115C4.45691 6.79312 4.34829 6.81747 4.24759 6.8626C4.14692 6.90772 4.05637 6.97262 3.98088 7.0532C3.9054 7.13377 3.84644 7.22846 3.80698 7.3317C3.76753 7.43492 3.74827 7.54491 3.75012 7.65545C3.75198 7.76599 3.77492 7.87526 3.81784 7.97709C3.86046 8.0782 3.92204 8.17022 3.99947 8.24778L6.18325 10.4997C6.18337 10.4998 6.1835 10.4999 6.18362 10.5001C6.25933 10.5787 6.34978 10.6415 6.45 10.6846C6.55039 10.7277 6.65836 10.75 6.7676 10.75C6.87683 10.75 6.9848 10.7277 7.08519 10.6846C7.18541 10.6415 7.27586 10.5787 7.35157 10.5001C7.35169 10.4999 7.35182 10.4998 7.35194 10.4997L11.993 5.71384C12.074 5.63579 12.1383 5.54196 12.1823 5.43831C12.227 5.33299 12.25 5.21955 12.25 5.10507C12.25 4.99059 12.227 4.87715 12.1823 4.77183C12.1383 4.6682 12.074 4.57439 11.9931 4.49634C11.9181 4.41941 11.8289 4.35784 11.7302 4.31544C11.6298 4.27231 11.5218 4.25 11.4126 4.25C11.3033 4.25 11.1954 4.27231 11.095 4.31544C10.9947 4.35851 10.9043 4.42138 10.8285 4.50004C10.8284 4.50013 10.8283 4.50023 10.8282 4.50033Z" fill="white" stroke="white" strokeWidth="0.5"/>
</svg>
</SvgIconlabel>


export const LabelPw = () => <SvgIconlabel size={[22, 20]} className='formlabel pw'>  
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" >
<path d="M3.91901 15.3189C2.72857 14.1905 1.78926 12.8239 1.16229 11.3082C1.05522 11.0588 1 10.7903 1 10.519C1 10.2476 1.05522 9.97914 1.16229 9.72981C1.99492 7.70431 3.39053 5.9598 5.18386 4.70285C6.886 3.51337 8.92407 2.89967 11 2.95152C12.4936 2.91402 13.975 3.22882 15.3243 3.87043M18.0918 5.72986C19.2759 6.85724 20.2112 8.2197 20.8377 9.72981C20.9448 9.97914 21 10.2476 21 10.519C21 10.7903 20.9448 11.0588 20.8377 11.3082C20.0051 13.3337 18.6095 15.0782 16.8161 16.3351C15.114 17.5246 13.0759 18.1383 11 18.0865C9.50642 18.124 8.025 17.8092 6.67573 17.1676" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.44328 11.7839C7.29167 11.3795 7.21475 10.9509 7.21626 10.519C7.21626 9.5155 7.6149 8.5531 8.32449 7.84351C9.03407 7.13392 9.99648 6.73528 11 6.73528C11.4324 6.73312 11.8605 6.81095 12.2648 6.9623M14.5567 9.25417C14.7081 9.65848 14.7859 10.0866 14.7837 10.519C14.7837 11.5225 14.3851 12.4849 13.6755 13.1945C12.9659 13.9041 12.0035 14.3027 11 14.3027C10.5681 14.3043 10.1395 14.2273 9.73514 14.0757M1.27039 18.6486L18.5675 1.35156" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

</svg>
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" >
<path d="M3.91901 13.3704C2.72857 12.242 1.78926 10.8754 1.16229 9.35968C1.05522 9.11036 1 8.84185 1 8.57051C1 8.29916 1.05522 8.03065 1.16229 7.78133C1.99492 5.75582 3.39053 4.01132 5.18386 2.75436C6.886 1.56488 8.92407 0.951187 11 1.00303C12.4936 0.96553 13.975 1.28033 15.3243 1.92194M18.0918 3.78138C19.2759 4.90875 20.2112 6.27121 20.8377 7.78133C20.9448 8.03065 21 8.29916 21 8.57051C21 8.84185 20.9448 9.11036 20.8377 9.35968C20.0051 11.3852 18.6095 13.1297 16.8161 14.3866C15.114 15.5761 13.0759 16.1898 11 16.138C9.50642 16.1755 8.025 15.8607 6.67573 15.2191" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.7836 8.70256C14.7836 9.67023 14.3992 10.5983 13.7149 11.2825C13.0307 11.9668 12.1027 12.3512 11.135 12.3512C10.1673 12.3512 9.23928 11.9668 8.55504 11.2825C7.87079 10.5983 7.48639 9.67023 7.48639 8.70256C7.48639 7.73489 7.87079 6.80685 8.55504 6.12261C9.23928 5.43836 10.1673 5.05396 11.135 5.05396C12.1027 5.05396 13.0307 5.43836 13.7149 6.12261C14.3992 6.80685 14.7836 7.73489 14.7836 8.70256Z" stroke="#BBBBBB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</SvgIconlabel>

//상품 hover 아이콘

export const Carticon = ({ onClick, className }) => <SvgprothumbLink  size={[22, 22]} onClick={onClick} className={className}>
  <svg  width="22" height="22" viewBox="1 0 22 22" fill="none" >
<path d="M1 1H4.63636L7.07273 13.7524C7.15586 14.1909 7.38355 14.5847 7.71595 14.865C8.04835 15.1454 8.46427 15.2943 8.89091 15.2857H17.7273C18.1539 15.2943 18.5698 15.1454 18.9022 14.865C19.2346 14.5847 19.4623 14.1909 19.5455 13.7524L21 5.7619H5.54545M9.18182 20.0476C9.18182 20.5736 8.7748 21 8.27273 21C7.77065 21 7.36364 20.5736 7.36364 20.0476C7.36364 19.5216 7.77065 19.0952 8.27273 19.0952C8.7748 19.0952 9.18182 19.5216 9.18182 20.0476ZM19.1818 20.0476C19.1818 20.5736 18.7748 21 18.2727 21C17.7707 21 17.3636 20.5736 17.3636 20.0476C17.3636 19.5216 17.7707 19.0952 18.2727 19.0952C18.7748 19.0952 19.1818 19.5216 19.1818 20.0476Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</SvgprothumbLink>


export const Viewicon = ({to}) => <SvgprothumbLink  size={[17, 17]} to={to}>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" >
  <path d="M8.13158 16.3188C8.60667 16.3188 9.00402 15.9409 9.00402 15.4757V9.03163H15.2641C15.7293 9.03163 16.1365 8.63469 16.1365 8.1596C16.1365 7.68493 15.7293 7.29708 15.2641 7.29708H9.00402V0.842671C9.00402 0.37792 8.60667 0 8.13158 0C7.65691 0 7.26906 0.37792 7.26906 0.843084V7.2975H1.00898C0.54382 7.2975 0.136543 7.68493 0.136543 8.1596C0.136543 8.63428 0.54382 9.03204 1.00898 9.03204H7.26906V15.4761C7.26906 15.9413 7.65691 16.3196 8.13158 16.3196" fill="#222222"/>
</svg>

</SvgprothumbLink>

export const Wishicon = () => <SvgprothumbLink size={[25,21]} className='type2' >
<svg width="25" height="21" viewBox="0 0 25 21" fill="none" className={icon.default} >
        <path id="fillheart" d="M12.0744 20.4849C11.9379 20.4849 11.8119 20.4324 11.7174 20.3274L2.18358 10.4997C1.0496 9.3342 0.451116 7.70674 0.524614 6.04777C0.608612 4.37831 1.3436 2.86635 2.59307 1.79537C3.55904 0.97639 4.74552 0.5354 6.04749 0.5354C7.63295 0.5354 9.20792 1.20738 10.3419 2.39386L12.0639 4.16832L13.7858 2.39386C14.9303 1.21788 16.4947 0.5354 18.0802 0.5354C19.3717 0.5354 20.5687 0.965891 21.5346 1.79537C22.7946 2.86635 23.5296 4.37831 23.6031 6.04777C23.6871 7.70674 23.0781 9.3237 21.9441 10.4997L12.4208 20.3379C12.3263 20.4429 12.1898 20.4954 12.0639 20.4954L12.0744 20.4849Z" fill="#F0F0F0"/>
        <path id="lineheart" d="M18.1012 1.06048C19.2667 1.06048 20.3377 1.44897 21.2091 2.19445C22.3536 3.17093 23.0256 4.5464 23.0991 6.07936C23.1726 7.59133 22.6161 9.07179 21.5871 10.1428L12.0953 19.981L2.56157 10.1323C1.53259 9.06129 0.976102 7.58083 1.0496 6.06886C1.1231 4.5464 1.79508 3.17093 2.93956 2.19445C3.81104 1.45947 4.88201 1.06048 6.04749 1.06048C7.49645 1.06048 8.92442 1.67996 9.9639 2.76144L10.9299 3.75891L11.3079 4.14741L12.0638 4.92439L12.8198 4.14741L13.1978 3.75891L14.1638 2.76144C15.2138 1.67996 16.6417 1.06048 18.0907 1.06048M6.05799 0.0104998C4.70352 0.0104998 3.35955 0.461989 2.26757 1.39647C-0.598862 3.83241 -0.745859 8.21081 1.81608 10.8568L11.3394 20.695C11.5389 20.905 11.8119 21.01 12.0743 21.01C12.3368 21.01 12.6098 20.905 12.8093 20.695L22.3326 10.8568C24.8946 8.21081 24.7476 3.83241 21.8916 1.38597C20.7996 0.45149 19.4557 0 18.1012 0C16.4107 0 14.7098 0.692984 13.4288 2.01595L12.4628 3.01343L12.0848 3.40192L11.7069 3.01343L10.7409 2.01595C9.45991 0.692984 7.75895 0 6.06849 0L6.05799 0.0104998Z" fill="#CCCCCC"/>
        </svg>
</SvgprothumbLink>

export const Bookicon = () => <SvgprothumbLink   className='type2'>
      <svg  width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M13.5556 0.5C14.384 0.5 15.0556 1.17157 15.0556 2V16.2035C15.0556 17.4105 13.7027 18.1232 12.7073 17.4406L9.1916 15.0299C8.33958 14.4456 7.21597 14.4456 6.36395 15.0299L2.84829 17.4406C1.85289 18.1232 0.5 17.4105 0.5 16.2035V2C0.5 1.17157 1.17157 0.5 2 0.5H13.5556Z" fill="#F0F0F0" stroke="#CCCCCC"/>
      </svg>
</SvgprothumbLink>


export const Badges = styled.span`
   display:inline-block;
   padding: 6px;
   border-radius: 4px;
   color: var(--text-secondary, #fff);
   font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height:0.8;
  position:relative;
  z-index:20;
   &.N{
     background: var(--color--labelN, #24C57A);
   }
  &.C{
   background: var(--color--labelD, #F79009);
  }
   &.S{
   background: var(--color--labelS, #9E77ED);
   }
`


//sidebar 메뉴 아이콘4종
export const ViewHistory = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
    <path 
      d="M1 28V26.5C1 21.535 5.035 17.5 10 17.5H16C20.965 17.5 25 21.535 25 26.5V28" 
      stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <path 
      d="M13 13C9.685 13 7 10.315 7 7C7 3.685 9.685 1 13 1C16.315 1 19 3.685 19 7C19 10.315 16.315 13 13 13Z" 
      stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);
