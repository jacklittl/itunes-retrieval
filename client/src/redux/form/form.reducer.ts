import actionTypes from './form.actionTypes';

type State = {
  data: any,
  error: boolean,
  loading: boolean,
  success: boolean,
}

type Action = {
  type: string;
  payload: any;
}

const initialState = {
  data: [],
  error: false,
  loading: false,
  success: false,
} 

function formReducer (state:any = initialState, action: Action): State {
  switch (action.type) {
    case actionTypes.FORM_FETCH: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.FORM_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        error: false
      }
    }
    case actionTypes.FORM_ERROR: {
      return {
        ...state,
        // data: action.payload,
        loading: false,
        success: false,
        error: true
      }
    }
    default: 
      return state;
  }
}

export default formReducer;