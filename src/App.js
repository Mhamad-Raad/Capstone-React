import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from './Redux/List';
import { Navigate, Route, Routes } from "react-router-dom";

import Details from "./pages/Details";
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <Routes>
      <Route exact index path="/Games" element={<Home />} />
      <Route path="/Games/:id" element={<Details />} />
      <Route path="*" element={<Navigate to='/Games' />} />
    </Routes>
  );
}

export default App;



