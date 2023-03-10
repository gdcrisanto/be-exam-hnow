import { User } from "../schema/user";
import { Request, Response } from "express";

interface UserT {
  fname: string;
  lname: string;
  address: string;
  postCode: Number;
  contactNo: string;
  email: string;
  username: string;
  password: string;
  id?: Number;
}

export const createUser = (req: Request, res: Response) => {
  const {
    fname,
    lname,
    address,
    postCode,
    contactNo,
    email,
    username,
    password,
  }: UserT = req.body;

  User.create({
    fname,
    lname,
    address,
    postCode,
    contactNo,
    email,
    username,
    password,
  })
    .then((user) => {
      return res.json({
        user,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Unable to create a user",
      });
    });
};

export const getUsers = (req: Request, res: Response) => {
  User.findAll()
    .then((users) => {
      return res.json({
        users,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Unable to get users",
      });
    });
};

export const updateUser = (req: Request, res: Response) => {
  const {
    fname,
    lname,
    address,
    postCode,
    contactNo,
    email,
    username,
    password,
    id,
  }: UserT = req.body;

  const updatedUser = {
    fname,
    lname,
    address,
    postCode,
    contactNo,
    email,
    username,
    password,
  };

  User.update(
    {
      ...updatedUser,
    },
    {
      where: {
        id,
      },
    }
  )
    .then((users) => {
      return res.json({
        users,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        message: "Unable to get users",
      });
    });
};
