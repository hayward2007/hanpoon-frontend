import React from 'react';
import {RecoilRoot} from 'recoil';

import App from './pages/Home/index';

const Root = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default Root;
