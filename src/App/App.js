import React, { Component } from 'react';

import { Button } from 'rmwc/Button';
import { LayoutCentered } from './layouts/LayoutCentered';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LayoutCentered />
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
