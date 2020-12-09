const jwt = require('jsonwebtoken');
const stocksjwtkey = 'User';

module.exports.generate = payload => {
    return jwt.sign(payload, stocksjwtkey, {expiresIn: '1h'})
}

module.exports.verify = token => {
    return jwt.verify(token, stocksjwtkey, err => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Token Verified");
      }
    });
  };

module.exports.decode = token => {
    return jwt.decode(token, stocksjwtkey);
};