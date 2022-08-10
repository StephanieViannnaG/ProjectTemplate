export const VendorSelectRed = (state = [], action) => {
  console.log('VendorSelectRed', action);
  switch (action.type) {
    case 'VENDOR_NAME':
      return action.payload;

    default:
      return state;
  }
};
