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
            <div style={{color: '#fff'}}>
                Some content.
                <div onClick={hideModal}>Hide modal</div>
            </div>
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

Inside ```<Modal>``` you can use any html.

When you clicked on 'Show modal' you will see something like this:

![Example](data/modal.jpg?raw=true)

## API
### reducer
Return modal reducer for redux combineReducers.

### showModal
Function to show modal.

Will show all modals which can be displayed. It means all ```<Modal>, <ModalContainer> or <MobileModals.*>``` which attached to current visible component. 
``` js
import { Modal, showModal } from 'react-redux-easy-modal';

<div>
    <Modal>My modal</Modal>
    ...

    <div onClick={showModal}></div>
</div>
```

But you can show only specific modal by id:
``` js
<button onClick={() => showModal('main-modal')}>showModalById</button>

<ModalContainer id="main-modal">
    <div>
        Some content.
        <div onClick={() => hideModal('main-modal')}>Hide modal</div>
    </div>
</ModalContainer>

<ModalContainer>
    Clear html.
    <div onClick={hideModal}>Hide all modals</div>
</ModalContainer>
```

After button's click will show only ```<ModalContainer id="main-modal">```, ```<ModalContainer>Clear html.``` will not be displayed.

### hideModal
Function to hide modal.

Will hide all modals which can be displayed. It means all ```<Modal>, <ModalContainer> or <MobileModals.*>``` which attached to current visible component. 
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

But you can hide only specific modal by id:
``` js
<button onClick={() => showModal('main-modal')}>showModalById</button>

<ModalContainer id="main-modal">
    <div>
        Some content.
        <div onClick={() => hideModal('main-modal')}>Hide modal</div>
    </div>
</ModalContainer>
```

After button's click will hide only ```<ModalContainer id="main-modal">```.


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
<div className="react-redux-easy-modal">
    <div className="react-redux-easy-modal-content">
        {children}
    </div>
</div>.
```

Example:
``` js
import { Modal } from 'react-redux-easy-modal';

<Modal>
    Html with classes and styles.
</Modal>
```

### MobileModals
react-redux-easy-modal also have some modals for mobile.

Depending on the device, different modals will be displayed. Supported Android and iOS.

You don't need to set any config. React-redux-easy-modal will get the user agent and load css for current device.

#### Confirm

Android

![Example](data/MobileModalsConfirm.jpg?raw=true)

iOS

![Example](data/MobileModalsConfirmIOS.jpg?raw=true)

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

Default values for ```<MobileModals.Confirm>``` is:
``` js
title = 'Confirm'; 
cancelText = 'Cancel'; 
okText = 'OK';
```

## Try it
Clone project and then call:
```npm i && npm run dev```