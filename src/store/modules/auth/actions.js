export function signInRequest(courierId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {courierId},
  };
}

export function signInSuccess(courier) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {courier},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
