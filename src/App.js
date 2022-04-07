import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './state';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SingleBoard from './pages/SingleBoard';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/boards/:boardTitle" element={<SingleBoard />} />
        <Route path="/boards/:boardTitle/:taskId" element={<SingleBoard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
