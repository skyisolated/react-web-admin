现在有一个ts定义的User类型：
export interface User {
  // ID，为uuid 
  id: string;
  name: string;
  age: number;
  // 性别，0表示女，1表示男
  sex: number;
  // 出生日期，格式为yyyy-mm-dd
  birthday: string;
  // 家庭住址
  address: string;
}
现在有一个包含50个用户的列表，请帮我编写一个方法，此方法接收一个user，从这个列表中找到id相同的记录，
然后将对应的记录替换为user，类似一个编辑的接口。