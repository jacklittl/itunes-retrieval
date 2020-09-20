export default (state = {}, action) => {

  	switch (action.type) {
	   	case 'ITUNES_ACTION':
	    	return {
                ...state,
				results: action.payload
	    	}
	   	default:
	    	return state
  	}
}