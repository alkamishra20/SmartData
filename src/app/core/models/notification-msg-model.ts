
/**
  * @desc general notification configuration
*/
export const NOTIFICATION = {
  SUCCESS: 'notify-success',
  ERROR: 'notify-error',
  WARNING: 'notify-warning',
  INFO: 'notify-info'
};


/**
  * @desc msgs for login
*/
export const LOGIN = {
  LOGIN_SUCCESS: {
    msg: 'User logged in successfully...',
    type: NOTIFICATION.SUCCESS
  },
  LOGIN_UNSUCCESS: {
    msg: 'Invalid username/password',
    type: NOTIFICATION.ERROR
  }
}

/**
  * @desc msgs for update user
*/
export const UPDATE_USER = {
  UPDATE_SUCCESS: {
    msg: 'User Updated successfully...',
    type: NOTIFICATION.SUCCESS
  },
  UPDATE_UNSUCCESS: {
    msg: 'There is some error while Updating Users...',
    type: NOTIFICATION.ERROR
  },
 }
  
