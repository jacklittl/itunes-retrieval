import { formFetch, formSuccess, formError } from './form.actions';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

export const fetchData = query => async dispatch => {
  dispatch(formFetch()); // set state to loading.
  try {
    const res = await fetch(`${API_ENDPOINT}?term=${query.term}&media=${query.media}`);
    const data = await res.json();
    dispatch(
      formSuccess({ payload: data.results })
    );
  } catch (error) {
    dispatch(
      formError({ payload: error })
    );
  }
}