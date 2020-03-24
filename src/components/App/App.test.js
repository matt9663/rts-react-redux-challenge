import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

describe('app component', () => {
  let container = null
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove;
    container = null;
  });
  it('renders without crashing', () => {
    ReactDOM.render(
      <Provider>
        <App />
      </Provider>,
      container
    );
  });
})

