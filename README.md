## CLASS101 Assignment

<p>
  <img alt="NPM Version" src="https://raw.githubusercontent.com/bytrustu/class101-assignment/aa9f5bcd357b6b003d48957a400169507041b757/public/images/npm.svg"/>
  <img alt="Bundle Size" src="https://raw.githubusercontent.com/bytrustu/class101-assignment/aa9f5bcd357b6b003d48957a400169507041b757/public/images/node.svg"/>
  <img alt="NPM Downloads" src="https://raw.githubusercontent.com/bytrustu/class101-assignment/aa9f5bcd357b6b003d48957a400169507041b757/public/images/react.svg"/>
  <img alt="MIT License" src="https://raw.githubusercontent.com/bytrustu/class101-assignment/aa9f5bcd357b6b003d48957a400169507041b757/public/images/nextjs.svg"/>
</p>

## 사용 기술
> Typescript, React, NextJS, Redux, Redux-saga, StyledComponent

## 데모 사이트
https://class101-bytrustu.netlify.app

## 데모 유튜브 영상
https://youtu.be/1CMSG_PW5dM

## 시작하기
1. git clone https://github.com/bytrustu/class101-assignment
2. npm install
3. npm run start
4. http://localhost:3001 접속

## 커밋 메세지
https://blog.ull.im/engineering/2019/03/10/logs-on-git.html 를 참고하여 커밋 메시지를 작성하였습니다.

## 반응형 구현
데스크탑 사이즈와 모바일 사이즈를 고려하여 반응형으로 개발하였습니다.

## 서버 환경 구현
요구사항과 동일하게 서버에서 주어진다고 생각하고 모든 항목은 비동기 처리하였습니다.  
동일한 구성을 위해 상품 및 쿠폰 데이터 로드 시 sleep 함수를 활용하 1~2초간 지연 로드 시간을 주었습니다.
로드 되고 있는 데이터에 대해서는 사용자 UX 적인 관점을 위해 Skeleton UI를 적용 하였습니다.

## PAGE NOT FOUND 처리
지정된 URL이 아니면 /products로 전환하도록 구현하였습니다.

## 컴포넌트 구현
모든 컴포넌트는 직접 StyledComponent로 CSS 작업 하였고,  
message와 결제명세서의 Modal만 antd를 활용 하였습니다.

## 상품 목록 ( /products )
1. 상품 목록의 페이징은 `인피니티 스크롤`로 구현 하였습니다.
2. 한 페이지당 5개의 상품으로 로드하여야 한다는 요구사항이 있었는데,   
   5개로 상품으로 보여줄 라인을 구현하려고 하니 모호한 부분이 있었습니다.  
   데스크톱 크기 기준으로 한 라인당 3개 (모바일의 경우 2개)의 상품씩 보여주는 것으로 정하였고,  
   첫 페이지 로드 시 가장 처음 상품은 `추천 상품`으로 추가하여 보여 주었습니다.  
   요구사항과 동일하게 페이지당 5개 상품을 불러오도록 구현 하였고,  
   추천 상품은 `기획의 의도`와 `깔끔한 리스트 UI`를 구현하기 위함입니다.
   
   - 추천 상품
    1. 사용자가 처음 사이트에 접속 하였을 때 임의의 상품 하나를 추천 상품으로 지정합니다.
    2. 사용자가 장바구니에 한번이라도 넣은 상품이 있다면 `localStorage에 추가`하고 그 상품 중에 임의로 추천 상품으로 지정합니다.
3. 상품의 하단 장바구니 버튼을 통해 추가/삭제 가능합니다.
4. 화면을 새로고침 하더라도 장바구니 내용 동기화를 위해 `localStroage`를 활용하였습니다.


## 장바구니 ( /cart )
1. 헤더 우측 상단 장바구니 버튼을 누르면 페이지 전환 됩니다.
2. 지정된 상품에 관해서만 구매목록에 표시되도록 구현하였습니다.  
3. 지정된 상품이 없으면 쿠폰이 적용되지 않도록 구현 하였습니다.  
4. 적용 버튼을 클릭 시 현재 가지고 있는 쿠폰 중 가장 할인이 많이 되는 쿠폰으로 지정되도록 하였습니다.
   1. 쿠폰 사용 불가 상품만 선택된 경우 최적 적용 버튼이 쿠폰 미적용 처리하였습니다.
5. 결제 버튼을 클릭 시 결제 중인 로딩을 보여주며 결제된 내용의 명세서를 모달로 보여 주었습니다.
6. 결제된 상품은 장바구니에서 제외되도록 구현하였습니다.
