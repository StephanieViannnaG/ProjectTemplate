export function VendorSelect(vendorName) {
  return async function (dispatch) {
    dispatch({
      type: 'VENDOR_NAME',
      payload: vendorName
    });
  };
}
