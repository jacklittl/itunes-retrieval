export const ITUNES_ACTION = 'ITUNES_ACTION'
export const GET_DATA_FAILED = 'GET_DATA_FAILED'

const getDataDone = data => {
  return {
    type: ITUNES_ACTION,
    payload: data.results
  };
}

const getDataFailed = () => {
  return {
    type: GET_DATA_FAILED
  };
}

export const itunesAction = ( media, term ) => dispatch => {
  let termStripped = ""

  if( term !== "" && term !== undefined ){
    termStripped = term.split(' ').join('+');
  }

  fetch(`https://itunes.apple.com/search?media=${media}&term=${termStripped}`)
    .then(response => response.json())
    .then(data => {
      dispatch(getDataDone({ results: data.results }));
    })
    .catch(error => {
      dispatch(getDataFailed(error));
    })
}