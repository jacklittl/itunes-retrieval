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
      }
    }
    case actionTypes.FORM_ERROR: {
      return {
        ...state,
        error: action.payload,
        success: false,
        loading: false 
      }
    }
    default: 
      return state;
  }
}

export default formReducer;