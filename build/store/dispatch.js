var dispatch = function dispatch() {};

export function setDispatch(newDispatch) {
    dispatch = newDispatch;
}

export function getDispatch() {
    return dispatch;
}