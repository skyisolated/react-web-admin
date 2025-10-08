import { User, UserQuery } from "@/types/user";
import request from "@/utils/request";
export function getUsers(query?: UserQuery) {
  return request.get(
    "/users",
    query
  );
}

export function addUser(user: User) {
  return request.post(
    "/users",
    user
  );
}
export function editUser(user: User) {
  return request.put(
    "/users",
    user
  );
}
export function deleteUser(user: User) {
  return request.delete(
    "/users",
    user
  );
}