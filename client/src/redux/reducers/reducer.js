export default (state = {}, action) => {
  	switch (action.type) {
	   	case 'ITUNES_ACTION':
	    	return {
	     		results: action.payload.results
	    	}
	   	default:
	    	return state
  	}
}