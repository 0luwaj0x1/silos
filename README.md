# silos

![npm version](https://img.shields.io/npm/v/silos)


### A reusable react modal component


## Installation & Usage

```sh
npm install silos --save
```
### inside index.html
```html
<div id="modal"></div>
```

### Include the Component

```js
import React from 'react'
import Modal from 'silos';

class Component extends React.Component {

  render() {
    return (
      <Modal close={() => {console.log('pass a fucntion as a prop to close the modal')} }>
          <p>This is my modal content</p>
      </Modal>
    )
  }
}
```