import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from './Redux/List';

import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <Home />
  );
}

export default App;

