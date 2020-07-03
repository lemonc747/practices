import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';





// 模拟异步函数
function resolveAfter2Seconds(name: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(name);
    }, 2000);
  });
}

async function asyncCall(name: string) {
  console.log('calling');
  const result = await resolveAfter2Seconds(name);
  console.log(result);
  return result;
}

// asyncCall();
const customAtom = atom({
  key: 'customAtom',
  default: '11',
});

const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({get}) => {
    const response = await asyncCall(get(customAtom)); // 这里没有用到atom
    return response;
  },
});

function CurrentUserInfo() {
  const userName: any = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}

export default CurrentUserInfo;
