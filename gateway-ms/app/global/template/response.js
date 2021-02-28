const Response = {
  general(data) {
    return data;
  },
  successMessage(message, description) {
    return {
      success: true,
      message: 'successfully executed' || message,
      description: 'successfully executed the API' || description,
    };
  },
  /**
   * Returns standard success response
   * @param {*} data
   * @param {String} message
   */
  success(data, message) {
    return {
      success: true,
      message,
      data,
    };
  },
  error(message, err) {
    return {
      success: false,
      message: message || 'some error occurred',
      description: err || 'error occurred on server, please try again after some time.',
    };
  },
  loginMessage(token) {
    return {
      success: true,
      message: 'User has been loggedin successfully',
      description: 'successfully logged In',
      token,
    };
  },
};

module.exports = Response;
