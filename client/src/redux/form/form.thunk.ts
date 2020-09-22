import { formFetch, formSuccess, formError } from './form.actions';

export const fetchData = query => async dispatch => {
  dispatch(formFetch()); // set state to loading.
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}?term=${query.term}&media=${query.media}&limit=200`);
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