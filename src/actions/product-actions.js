
export const PRODUCT_CHANGED = 'PRODUCT_CHANGED';
export const DO_CHECKOUT = 'DO_CHECKOUT';
export const CLEAR_CHECKOUT = 'CLEAR_USER_INFO';

export const createAction = type => payload => ({
    type,
    payload
});

export const nextProduct = (currentSlot) => (dispatch, getState) => {
    let { baseState } = getState();
    let { user_wines, repository } = baseState;

    let currentWine = user_wines[currentSlot];

    let currentIndex = repository.wines.findIndex((item) => { return item.sku === currentWine.sku});
    currentIndex = currentIndex + 1;
    if(currentIndex > (repository.wines.length - 1)) currentIndex = 0;

    dispatch(createAction(PRODUCT_CHANGED)({ slot:currentSlot, newIndex: currentIndex}));
};

export const doCheckout = (email) => (dispatch, getState) => {
    dispatch(createAction(DO_CHECKOUT)({ email: email}));
}

export const clearCheckout = () =>  (dispatch, getState) => {
    dispatch(createAction(CLEAR_CHECKOUT)());
}