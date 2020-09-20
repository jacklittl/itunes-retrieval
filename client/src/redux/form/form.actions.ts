import actionTypes from './form.actionTypes'

type Form = any;

export function formFetch (): { type: string } {
  return {
    type: actionTypes.FORM_FETCH
  }
}

export function formSuccess ( form: Form ): { type: string, payload: Form } {
  return {
    type: actionTypes.FORM_SUCCESS,
    payload: form
  }
}

export function formError ( error: any ): { type: string, payload: any } {
  return {
    type: actionTypes.FORM_ERROR,
    payload: error
  }
}