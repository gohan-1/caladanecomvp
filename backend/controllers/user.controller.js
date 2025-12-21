const UserModel = require('../models/user.model');
const { successResponse, errorResponse, notFoundResponse, forbiddenResponse } = require('../utils/response');
const logger = require('../utils/logger');

exports.getMe = async (req, res, next) => {
  try {
    const users = await UserModel.getUsersAddress({ address: req.address });
    if (users.length === 0) {
      const { response, statusCode } = notFoundResponse('User not found');
      return res.status(statusCode).json(response);
    }

    const user = users[0];
    const { response, statusCode } = successResponse({
      id: user.id,
      address: user.address,
      token_balance: user.token_balance,
      MBUSD_balance: user.MBUSD_balance,
      referral_code: user.referral_code,
    });

    return res.status(statusCode).json(response);
  } catch (error) {
    logger.error('Get user error:', error);
    next(error);
  }
};

exports.updateMe = async (_req, res) => {
  const { response, statusCode } = errorResponse('Not implemented', 501);
  return res.status(statusCode).json(response);
};

exports.getStatistics = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    
    // Validate userId parameter
    if (!userId || isNaN(parseInt(userId))) {
      const { response, statusCode } = errorResponse('Invalid user ID', 400);
      return res.status(statusCode).json(response);
    }

    // Check if user is accessing their own statistics
    // Users can only access their own statistics
    if (parseInt(userId) !== req.user_id) {
      const { response, statusCode } = forbiddenResponse('Unauthorized to access this user\'s statistics');
      return res.status(statusCode).json(response);
    }

    const statistics = await UserModel.getUserStatistics(userId);
    
    if (!statistics) {
      const { response, statusCode } = notFoundResponse('User not found');
      return res.status(statusCode).json(response);
    }

    const { response, statusCode } = successResponse(statistics);
    return res.status(statusCode).json(response);
  } catch (error) {
    logger.error('Get user statistics error:', error);
    next(error);
  }
};
