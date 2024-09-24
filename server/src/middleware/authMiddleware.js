// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'secreta', (err, user) => {
      if (err) return res.status(403).json({ error: 'Token inválido' });

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ error: 'Acesso negado' });
      }

      req.user = user;
      next();
    });
  };
};

export default authMiddleware;
