const { body, validationResult } = require('express-validator');

exports.validateRegister = [
  body('fullName').not().isEmpty().withMessage('Full name is required'),
  body('phone').not().isEmpty().withMessage('Phone number is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').not().isEmpty().withMessage('Password is required'),
  body('conformpassword')
    .not()
    .isEmpty()
    .withMessage('Confirm password is required'),
  body('country').not().isEmpty().withMessage('Country is required'),
  body('role').not().isEmpty().withMessage('Role is required'),
  body('Areaofinterest')
    .not()
    .isEmpty()
    .withMessage('Area of interest is required'),
  body('AreaofResearch')
    .not()
    .isEmpty()
    .withMessage('Area of research is required'),
  body('InvestmentArea')
    .not()
    .isEmpty()
    .withMessage('Investment area is required'),
  body('InvestmentRange')
    .not()
    .isEmpty()
    .withMessage('Investment range is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
