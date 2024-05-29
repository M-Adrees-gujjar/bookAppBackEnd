const jwt = require('jsonwebtoken');

function verifyAccessToken(token) {
    const secret = process.env.SECRET_KEY;
    try {
      const decoded = jwt.verify(token, secret);
      return { success: true, data: decoded };
    } catch (error) {
        console.log("-err------",error);
      return { success: false, error: error.message };
    }
  }


  function authenticateToken(req, res, next) {
    const authHeader = req.body;
    const token = authHeader.token;
  
    if (!token) {
      return res.sendStatus(401);
    }           
  
    const result = verifyAccessToken(token);
  
    if (!result.success) {
      return res.status(403).json({ error: result.error });
    }

    req.user = result.data;

    next();
  }

module.exports = authenticateToken