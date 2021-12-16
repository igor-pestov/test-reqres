import axios from "axios";

export const getUsers = () => {
  return axios({
    method: "get",
    url: "https://reqres.in/api/users",
  })
  .then((res) => res.data
  )
  .catch((error) => {
      console.error('[getUsers] error: ', error)
  })
};

export const getUser = (id) => {
    return axios({
      method: "get",
      url: `https://reqres.in/api/users/${id}`,
    })
    .then((res) => res.data
    )
    .catch((error) => {
        console.error('[getUser] error: ', error)
    })
  };