import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './app/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Cart/>
    </div>
    </Provider>
  );
}

export default App;
