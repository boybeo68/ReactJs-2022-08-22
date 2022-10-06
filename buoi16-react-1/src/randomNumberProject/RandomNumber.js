import React, {useEffect} from 'react';
import Main from './components/Main';
import {Menu} from './components/Menu';

export default function RandomNumber() {
  return (
    <div>
      <Menu></Menu>
      <Main />
    </div>
  );
}

// Render và lifecycle (vòng đời) của react
// Render : Cập nhật UI.
// => state thay đổi thì componet sẽ render lại => ảnh hưởn performance của app
// => đảm bảo setState khi thực sự cần thiết.
// => cách tối ưu performance: sử dụng useMemo, useCallBack, React.memo
// Lifecyle: Mounting - Updating - UnMounting.

// sử dụng useEffect.
// - Mouting: khi deps: là array rỗng []
// - Update: nhảy vào khi mouting và khi deps thay đổi : vd dưới: nhảy vào func môi xkhi numberOfGuess thay đổi

// useEffect(() => {
//     if (numberOfGuess > 7) {
//       setResultText('Bạn thua rồi');
//       resetGame();
//     }
//   }, [numberOfGuess]);
// - Unmount: khi component biến mất