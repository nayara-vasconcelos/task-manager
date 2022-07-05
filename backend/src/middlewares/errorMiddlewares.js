const {
  BAD_REQUEST,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
  UNPROCESSABLE_ENTITY,
} = require('../constants/statusCodes');

const statusByErrorCode = {
  alreadyExists: CONFLICT,
  isInvalid: BAD_REQUEST,
  notFound: NOT_FOUND,
  notPermitted: UNPROCESSABLE_ENTITY,
  unauthorized: UNAUTHORIZED,
};

const handleErrors = (err, _req, res) => {
  if (err.code) {
    const status = statusByErrorCode[err.code];

    if (status) {
      return res.status(status).json({ error: err.message, result: null });
    }
  }

  return res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error', result: null });
};

module.exports = {
  handleErrors,
};
