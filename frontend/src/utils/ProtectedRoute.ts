const jwt = require('jsonwebtoken');

export function ProtectRoute(req: { headers: { authorization: any; }; user: any; }, res: { redirect: (arg0: string) => any; }, next: () => void) {
  const token = req.headers.authorization;
  if (!token) {
    return res.redirect('/auth/login');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.redirect('/auth/login');
  }
}


export default ProtectRoute;