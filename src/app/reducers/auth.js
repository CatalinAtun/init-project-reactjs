import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  RESTORE_AUTH_INFO,
  VALIDATE_TOKEN_REQUEST,
  VALIDATE_TOKEN_SUCCESS,
  CLEAR_AUTH_INFO,
  PASSWORD_RECOVERY_REQUEST,
  PASSWORD_RECOVERY_FINISHED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../actions/auth';

const initialState = {
  user: {
    id: 0,
    email: '',
    uid: '',
    role: ''
  },
  headers: {
    accessToken: '',
    client: '',
    expiry: '',
    tokenType: '',
    uid: ''
  },
  signedIn: false,
  ongoingRequest: {
    signIn: false,
    signOut: false,
    passwordRecovery: false
  },
  navigateTo: null
};

const setHeaders = action => ({
  accessToken: action.response.headers.get('access-token'),
  client: action.response.headers.get('client'),
  expiry: action.response.headers.get('expiry'),
  tokenType: action.response.headers.get('token-type'),
  uid: action.response.headers.get('uid')
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: true }
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: false },
        signedIn: true
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        ongoingRequest: { ...state.ongoingRequest, signIn: true },
        signedIn: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signIn: false }
      };
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...initialState,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, signOut: false }
      };
    case VALIDATE_TOKEN_REQUEST:
      return {
        ...state,
        navigateTo: null
      };
    case RESTORE_AUTH_INFO:
      return {
        ...state,
        headers: action.auth,
        signedIn: true
      };
    case CLEAR_AUTH_INFO:
      localStorage.removeItem('access-token');
      localStorage.removeItem('client');
      localStorage.removeItem('expiry');
      localStorage.removeItem('token-type');
      localStorage.removeItem('uid');
      return {
        ...state,
        user: {
          id: '',
          email: '',
          uid: '',
          role: ''
        },
        headers: {
          accessToken: '',
          client: '',
          expiry: '',
          tokenType: '',
          uid: ''
        },
        signedIn: false,
        navigateTo: action.navigateTo
      };
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.result,
        headers: setHeaders(action),
        navigateTo: action.navigateTo
      };
    case PASSWORD_RECOVERY_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, passwordRecovery: true }
      };
    case PASSWORD_RECOVERY_FINISHED:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, passwordRecovery: false }
      };
    default:
      return state;
  }
};

export default reducer;
