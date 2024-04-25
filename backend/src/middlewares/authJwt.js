import jwt from "jsonwebtoken";
import config from "../config.js";
import { Users } from '../models/user.js';
import { Roles } from '../models/roles.js';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("access");
    console.log(token)

    if (!token) return res.status(403).json({ message: "No Token Provider" });

    const decoded = jwt.verify(token, config.SECRET);

    req.userId = decoded.id;

    const user = await Users.findById(req.userId, { password: 0 });
    console.log(user);

    if (!user) return res.status(404).json({ message: 'No User Found' });

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

export const isAdmin = async (req, res, next) => {
  const user = await Users.findById(req.userId);
  const roles = await Roles.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].id === "661d22d55153f820096becae") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: 'Require Admin Role' });
}


