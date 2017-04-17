import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/Hello';

function render(root: any) {
  ReactDOM.render(
    <AppContainer>
      {root}
    </AppContainer>,
    document.getElementById('app')
  );
}

render(<Hello name="World" />);

if (module.hot) {
  module.hot.accept('./components/Hello', () => {
    console.log('accepting Hello');
    const NextHello = require<RequireImport>('./components/Hello').default;
    render(<NextHello name="World" />);
  });
}
