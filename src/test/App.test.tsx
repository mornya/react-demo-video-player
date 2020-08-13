import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';

describe('App Test', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    if (div) {
      ReactDOM.render(
        <BrowserRouter>
          <App/>
        </BrowserRouter>,
        div,
      );
      ReactDOM.unmountComponentAtNode(div);
    }
  });

});
