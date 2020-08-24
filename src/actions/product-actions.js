
export const PRODUCT_CHANGED = 'PRODUCT_CHANGED';

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