import { IUser } from "../model/user";

let users: Array<IUser> = [
  {
    id: 1,
    name: "Marcelo Leite",
    email: "marsleite@email.com",
    create_at: new Date("2020-05-17"),
    update_at: new Date("2020-05-17")
  },
  {
    id: 2,
    name: "Michael Jackson",
    email: "mj@email.com",
    create_at: new Date("2020-04-19"),
    update_at: new Date("2020-04-19")
  },
  {
    id: 3,
    name: "Elvis Prayley operation",
    email: "elvis@email.com",
    create_at: new Date("2022-02-19"),
    update_at: new Date("2022-02-19")
  }
]

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

export {getUsers}