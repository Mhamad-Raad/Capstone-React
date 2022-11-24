import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { fetchList } from './Redux/List';

import Details from './pages/Details';
import Home from './pages/Home';
import AppBar from './Layout/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const done = useSelector((state) => state.data.done);
  const list = useSelector((state) => state.data.items);

  const [filteredArr, setfilter] = useState([]);

  useEffect(() => {
    setfilter([...list]);
  }, [list]);

  const searchHandler = (e) => {
    const search = e.target.value;
    const copy = list.filter((item) => item.title.includes(search));
    setfilter(copy);
  };

  return (
    <>
      <AppBar inputSearchHandler={searchHandler} />
      <Routes>
        <Route
          exact
          index
          path="/Games"
          element={<Home games={filteredArr} Done={done} />}
        />
        <Route path="/Games/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/Games" />} />
      </Routes>
    </>
  );
}

export default App;
