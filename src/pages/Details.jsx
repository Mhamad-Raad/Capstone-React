
import { useLocation } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  
  const game = location.state;

  return (
    <div>{game.title}</div>
  )
}
