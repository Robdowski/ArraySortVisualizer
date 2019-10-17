
export const HANDLE_RANGE = 'HANDLE_RANGE'







export const handleRange = e => dispatch => {
    dispatch({type: HANDLE_RANGE, payload: e.target.value})
}