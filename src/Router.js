import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Nav from './components/Nav/Nav';
import KakaoLogin from './components/KakaoLogin/KakaoLogin';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signin_kakao" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
