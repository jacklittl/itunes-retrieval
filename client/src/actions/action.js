export const ITUNES_ACTION = 'ITUNES_ACTION'
export const GET_DATA_FAILED = 'GET_DATA_FAILED'

const getDataDone = data => {
  return {
    type: ITUNES_ACTION,
    payload: data
  };
}

const getDataFailed = () => {
  return {
    type: GET_DATA_FAILED
  };
}

export const itunesAction = ( filters ) => dispatch => {
  let media = filters.media,
      term = filters.term,
      termStripped = term.split(' ').join('+');

  fetch(`https://itunes.apple.com/search?media=${media}&term=${termStripped}`)
    .then(response => response.json())
    .then(data => {
      dispatch(getDataDone({ results: data.results }));
    })
    .catch(error => {
      dispatch(getDataFailed(error));
    })
}