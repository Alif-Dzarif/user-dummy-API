function errorHandler(err, req, res, next) {
  console.log(err);
  let code = 500;
  let message = 'Internal Server Error'

  switch (err.name) {
    case 'FORM_NULL':
      code = 400
      message = 'Data required'
      break;
    
    case 'DATA_NOT_FOUND':
      code = 404;
      message = 'Data not found'
      break;
    
    case 'WRONG_PASSWORD':
      code = 403;
      message = 'Wrong email or password'
      break;

    case 'AUTH_ISSUE':
      code = 403;
      message = 'Forbidden'
      break;

    default:
      break;
  }

  res.status(code).json({ message })
}

module.exports = errorHandler