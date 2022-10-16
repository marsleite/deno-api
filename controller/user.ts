import { IUser } from "../model/user.ts";

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
    name: "Elvis Presley operation",
    email: "elvis@email.com",
    create_at: new Date("2022-02-19"),
    update_at: new Date("2022-02-19")
  }
]

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

const getUserByid = ({ params, response }: { params: { id: string }, response: any }) => {

  const user: IUser | undefined = users.find((it) => {
    return it.id === Number(params.id)
  })


  if(user) {
    response.status = 200
    response.body = user
  } else {
    response.status = 404
    response.body = { message: "user not found" }
  }

}

export { getUsers, getUserByid }