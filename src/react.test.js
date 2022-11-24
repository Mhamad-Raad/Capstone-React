import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore';
import GameItem from './Componenets/GameItem';
import App from './App';

describe('test game items data', () => {
  it('should render without crashing', () => {
    render(
      <Provider store={store}>
        <GameItem
          game={{
            title: 'hama',
            image:
              'https://images.igdb.com/igdb/image/upload/t_cover_big/co1l8r.jpg',
            id: 1,
          }}
          clickHandler={() => {}}
        />
      </Provider>,
    );
    expect(screen.getByText('hama')).toBeInTheDocument();
  });
});

describe('test snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
