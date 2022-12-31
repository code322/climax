import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { localStore, persisterStore } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Provider store={localStore}>
      <PersistGate persistor={persisterStore}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
