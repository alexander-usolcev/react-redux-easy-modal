# react-redux-easy-modal
Basic react-redux modal implementation (reducer, store, components and actions)

For building you can use [Webpack](https://webpack.github.io/) or something like it.


## Install
``` js
npm install react-redux-easy-modal
```

## Usage
In your main reducer:
``` js
import { combineReducers } from 'redux';
import { reducer as modal } from 'react-redux-easy-modal';

const rootReducer = combineReducers({
    ...
    modal,
    ...
});

export default rootReducer;

```

react-redux-easy-modal need to be saved in redux store with **modal** key.

In your container:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Modal, showModal, hideModal } from 'react-redux-easy-modal';

const App = () => (
    <div>
        <div onClick={showModal}>Show modal</div>

        My application.

        <Modal>
            Some content.
            <div onClick={hideModal}>Hide modal</div>
        </Modal>
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('app')
);
```

Inside <Modal> you can use any html.

When you clicked on 'Show modal' you will see something like this:

![Example](data/modal.jpg?raw=true)

## API
### reducer
Return modal reducer for redux combineReducers.

### showModal
Function to show modal.
Will show all modals which can be displayed. It's mean all <Modal>, <ModalContainer> or <MobileModals.*> which attached to current visible component. 
``` js
import { Modal, showModal } from 'react-redux-easy-modal';

<div>
    <Modal>My modal</Modal>
    ...

    <div onClick={showModal}></div>
</div>
```

### hideModal
Function to hide modal.
Will hide all modals which can be displayed. It's mean all <Modal>, <ModalContainer> or <MobileModals.*> which attached to current visible component. 
``` js
import { Modal, showModal, hideModal } from 'react-redux-easy-modal';

<div>
    <Modal>
        <span onClick={hideModal}>Hide this modal</span>
    </Modal>
    ...

    <div onClick={showModal}></div>
</div>
```

### ModalContainer
Return a react component with clear html (without any styles and classes).
Return:
``` js
<div>{childen}</div>
```

Example:
``` js
import { ModalContainer } from 'react-redux-easy-modal';

<ModalContainer>
    Some clear html content without any styles.
</ModalContainer>
```

### Modal
Return a react component with classes and styles.
Return:
``` js
<div className="modal">
    <div className="modal__content">
        {children}
    </div>
</div>.
```

Example:
``` js
import { ModalContainer } from 'react-redux-easy-modal';

<ModalContainer>
    Some clear html content without any styles.
</ModalContainer>
```

### MobileModals
react-redux-easy-modal also have some modals for mobile.
Return:
![Example](data/MobileModalsConfirm.jpg?raw=true)

Example:
``` js
import { MobileModals } from 'react-redux-easy-modal';

<MobileModals.Confirm 
    title="Confirm" 
    callback={() => alert('OK')} 
    cancelCallback={() => alert('Cancel')} 
    okText="OK" 
    cancelText="Cancel">
        Delete?
</MobileModals.Confirm>
```