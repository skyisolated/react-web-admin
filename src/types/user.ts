import { Dayjs } from "dayjs";

export interface UserQuery {
  name?: string,
  page?: number,
  pageSize?: number
}
// 用户类型定义
export interface User {
  // ID，为uuid 
  id: string;
  name: string;
  age?: number;
  // 性别，0表示女，1表示男
  sex?: number;
  // 出生日期，格式为yyyy-mm-dd
  birthday?: string | Dayjs;
  // 家庭住址
  address?: string;
}