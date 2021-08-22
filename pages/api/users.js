import axios from "axios";
import {users} from "../../util/index"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    try {
      const userInfo = await axios.get(
        `https://api.github.com/users/${body.gitHubUserName}`
      );
      users.push(userInfo.data);
    
      res.status(200).json({ data: { ...userInfo.data } });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  } else if (req.method === "GET") {
    try {
      res.status(200).json({ data: users });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
};
