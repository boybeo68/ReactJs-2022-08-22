import React, {useEffect} from 'react';

export default function Led() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('Led mouting');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Led</div>;
}
// vào 1 màn hình call 1 api : mouting
// lắng nghe tin nhắn: chat -> nhận được tn -> chat -> nhận đc tin
// ra màn hình khác không muốn nhận tin nhắn nữa => unmount
