import { Routes, Route } from 'react-router-dom';

import SignIn from './lib/pages/SignIn';
import CreateAccount from './lib/pages/CreateAccount';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
};

export default Router;
