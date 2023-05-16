import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/App';
import GlobalProvider from 'components/common/GlobalProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
