<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//폰트
import 'pretendard/dist/web/static/pretendard.css';

//플러그인
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//커스터마이징
import './style/_variables.css' //스타일전역변수
import './style/_mixins.scss'  // 스타일함수
import './style/_globals.scss'   //전역스타일 공통클래스 위의 스타일전역변수명 연결

import './components/layout/_layout.scss' // 상단, 하단 등 레이아웃 스타일



import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter> 
);

>>>>>>> 4ca1762a773aa944d7c8d47ff244fd4d15125c92
