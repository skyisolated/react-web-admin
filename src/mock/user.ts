import { User } from "@/types/user";
import { BASE_URL } from "@/utils/constant";
import Mock from "mockjs";
import cloneDeep from "lodash-es/cloneDeep"; // 按需引入
import { nanoid } from "nanoid";
let users: User[] = [
    {
        "id": "f6c59958-5c70-4b35-84e0-ad00b7d7f92e",
        "name": "钱强",
        "age": 42,
        "sex": 1,
        "birthday": "1983-09-16",
        "address": "重庆市西安市海淀区中山路28号"
    },
    {
        "id": "5b052124-4b48-4936-9ea4-94e7e30d7381",
        "name": "卫涛",
        "age": 32,
        "sex": 0,
        "birthday": "1993-04-07",
        "address": "重庆市上海市黄浦区和平路28号"
    },
    {
        "id": "16529a4e-1d5f-421f-92e1-28098f5c783d",
        "name": "郑伟",
        "age": 39,
        "sex": 1,
        "birthday": "1986-02-25",
        "address": "吉林省杭州市鼓楼区解放路205号"
    },
    {
        "id": "f2bb369f-54c5-42c8-bccb-3c120d2b616d",
        "name": "卫静",
        "age": 46,
        "sex": 0,
        "birthday": "1979-08-27",
        "address": "山西省成都市福田区光明路318号"
    },
    {
        "id": "4b44128b-0451-44cd-b214-2c7c51df3aee",
        "name": "钱军",
        "age": 23,
        "sex": 1,
        "birthday": "2002-10-08",
        "address": "黑龙江省北京市金水区和平路88号"
    },
    {
        "id": "0915cc00-1948-4cbb-b8b2-97d694d17741",
        "name": "褚娜",
        "age": 53,
        "sex": 1,
        "birthday": "1972-12-21",
        "address": "辽宁省成都市西湖区人民路28号"
    },
    {
        "id": "9d30ffd4-3ae4-4ddc-8845-745e8ddaf792",
        "name": "沈明",
        "age": 20,
        "sex": 1,
        "birthday": "2005-05-16",
        "address": "辽宁省杭州市海淀区建设路1号"
    },
    {
        "id": "7f02c04d-413a-44a0-8fb7-077371f550d6",
        "name": "吴磊",
        "age": 49,
        "sex": 0,
        "birthday": "1976-08-05",
        "address": "黑龙江省广州市浦东新区建设路102号"
    },
    {
        "id": "982fcba4-acc9-4316-96f9-a37643d3de2a",
        "name": "褚勇",
        "age": 20,
        "sex": 1,
        "birthday": "2005-11-20",
        "address": "辽宁省郑州市天河区胜利路88号"
    },
    {
        "id": "6d2b9268-b2ef-46ea-ac3c-3a3917c10730",
        "name": "吴涛",
        "age": 29,
        "sex": 1,
        "birthday": "1996-07-04",
        "address": "江苏省西安市金水区胜利路88号"
    },
    {
        "id": "3bdd2ef2-4772-4a66-8341-c1b949987981",
        "name": "沈娜",
        "age": 55,
        "sex": 1,
        "birthday": "1970-04-01",
        "address": "黑龙江省杭州市雁塔区和平路102号"
    },
    {
        "id": "4c97794d-2268-45ca-a09b-b5a2b760c5a7",
        "name": "褚伟",
        "age": 49,
        "sex": 0,
        "birthday": "1976-10-08",
        "address": "天津市西安市鼓楼区黄河路55号"
    },
    {
        "id": "70bf35a8-07c9-4c39-b21e-54ff205df8ae",
        "name": "褚勇",
        "age": 38,
        "sex": 1,
        "birthday": "1987-11-26",
        "address": "河北省南京市福田区长江路55号"
    },
    {
        "id": "e3b6a903-5133-4bb8-a947-555cb62ca682",
        "name": "李伟",
        "age": 21,
        "sex": 0,
        "birthday": "2004-02-25",
        "address": "山西省上海市鼓楼区建设路28号"
    },
    {
        "id": "55daceed-f9aa-46d7-8b16-a35d8f81a44e",
        "name": "韩洋",
        "age": 37,
        "sex": 0,
        "birthday": "1988-01-25",
        "address": "河北省北京市天河区泰山街1号"
    },
    {
        "id": "a209faf2-240e-4c7f-b2fa-6b0cdd193279",
        "name": "冯勇",
        "age": 22,
        "sex": 1,
        "birthday": "2003-06-19",
        "address": "河北省上海市福田区光明路88号"
    },
    {
        "id": "f0008b12-58ca-4525-b18a-2da4efc5e59c",
        "name": "郑丽",
        "age": 39,
        "sex": 0,
        "birthday": "1986-09-01",
        "address": "河北省西安市朝阳区建设路1号"
    },
    {
        "id": "0d798ede-4e06-440c-a282-c1ea58815dcb",
        "name": "钱磊",
        "age": 47,
        "sex": 0,
        "birthday": "1978-03-08",
        "address": "河北省杭州市鼓楼区胜利路1号"
    },
    {
        "id": "1046b2be-07c3-4cfe-936a-73ebb06c6936",
        "name": "卫伟",
        "age": 62,
        "sex": 0,
        "birthday": "1963-05-11",
        "address": "河北省广州市黄浦区光明路28号"
    },
    {
        "id": "c1486ee9-ebe0-4409-9abe-1e0271b30994",
        "name": "李艳",
        "age": 61,
        "sex": 1,
        "birthday": "1964-07-23",
        "address": "江苏省上海市朝阳区中山路55号"
    },
    {
        "id": "ee84e18f-4190-4cf4-9beb-f29742e60893",
        "name": "李明",
        "age": 42,
        "sex": 0,
        "birthday": "1983-03-20",
        "address": "江苏省南京市黄浦区建设路15号"
    },
    {
        "id": "69cce220-b527-46b6-9822-eb0c5aedd033",
        "name": "孙艳",
        "age": 62,
        "sex": 1,
        "birthday": "1963-03-01",
        "address": "上海市成都市浦东新区和平路88号"
    },
    {
        "id": "e7267e63-f625-49c7-a4b1-1a9d8ea7337f",
        "name": "褚艳",
        "age": 38,
        "sex": 0,
        "birthday": "1987-01-06",
        "address": "江苏省西安市海淀区人民路318号"
    },
    {
        "id": "ee5b2b22-3515-4a56-9f33-515b9ec9128c",
        "name": "孙军",
        "age": 54,
        "sex": 0,
        "birthday": "1971-12-21",
        "address": "吉林省杭州市海淀区长江路1号"
    },
    {
        "id": "bc8453aa-2c0c-4177-9151-0eb84757bcad",
        "name": "周丽",
        "age": 37,
        "sex": 0,
        "birthday": "1988-08-26",
        "address": "江苏省深圳市朝阳区泰山街205号"
    },
    {
        "id": "7b8944f1-7485-4e84-855e-fd561e3a72f4",
        "name": "杨丽",
        "age": 23,
        "sex": 0,
        "birthday": "2002-10-28",
        "address": "辽宁省杭州市浦东新区光明路501号"
    },
    {
        "id": "dab9959a-b116-4830-9d2e-b7c63a652615",
        "name": "赵杰",
        "age": 31,
        "sex": 0,
        "birthday": "1994-06-21",
        "address": "北京市北京市雁塔区黄河路55号"
    },
    {
        "id": "261f74a7-7152-4818-86fd-f26575e7df8f",
        "name": "吴明",
        "age": 29,
        "sex": 1,
        "birthday": "1996-09-25",
        "address": "辽宁省杭州市金水区胜利路205号"
    },
    {
        "id": "30e735d0-f9a5-41fd-bd59-70fd4287cfc5",
        "name": "钱勇",
        "age": 44,
        "sex": 1,
        "birthday": "1981-02-26",
        "address": "河北省西安市朝阳区和平路36号"
    },
    {
        "id": "3866262e-bbe8-462b-9d7a-7e8797fb1743",
        "name": "赵艳",
        "age": 37,
        "sex": 0,
        "birthday": "1988-09-08",
        "address": "黑龙江省南京市西湖区长江路28号"
    },
    {
        "id": "479240d6-bbb1-4522-a653-fd87ad7cf8f5",
        "name": "韩杰",
        "age": 28,
        "sex": 1,
        "birthday": "1997-09-13",
        "address": "黑龙江省北京市海淀区光明路28号"
    },
    {
        "id": "1a396b12-9919-4cc8-9144-56ed5e7448b1",
        "name": "孙洋",
        "age": 64,
        "sex": 0,
        "birthday": "1961-02-24",
        "address": "北京市上海市浦东新区泰山街205号"
    },
    {
        "id": "4f4c6448-3e02-4b99-b102-2ea886670851",
        "name": "蒋强",
        "age": 32,
        "sex": 0,
        "birthday": "1993-03-12",
        "address": "江苏省郑州市浦东新区胜利路28号"
    },
    {
        "id": "1b6f42ca-03cc-416b-b43d-75b82b0b3420",
        "name": "蒋涛",
        "age": 67,
        "sex": 0,
        "birthday": "1958-01-16",
        "address": "河北省杭州市天河区胜利路28号"
    },
    {
        "id": "ba5590d9-0dd9-487c-9389-613f87ff6684",
        "name": "王明",
        "age": 49,
        "sex": 1,
        "birthday": "1976-02-27",
        "address": "天津市南京市朝阳区长江路205号"
    },
    {
        "id": "0daa5eac-36d7-4cd6-828b-2681f34bc6d6",
        "name": "王娜",
        "age": 63,
        "sex": 0,
        "birthday": "1962-06-01",
        "address": "重庆市郑州市黄浦区建设路102号"
    },
    {
        "id": "5eb3d6ba-50f3-4614-802e-04997808f9bd",
        "name": "钱丽",
        "age": 39,
        "sex": 1,
        "birthday": "1986-02-08",
        "address": "北京市成都市天河区和平路205号"
    },
    {
        "id": "ef1f5d61-c479-4bb8-bf88-13f913c5cc7c",
        "name": "褚丽",
        "age": 25,
        "sex": 1,
        "birthday": "2000-06-28",
        "address": "河北省杭州市雁塔区胜利路318号"
    },
    {
        "id": "53d833d8-41fe-49fe-8180-518ca8581e7b",
        "name": "蒋静",
        "age": 57,
        "sex": 0,
        "birthday": "1968-09-22",
        "address": "河北省西安市西湖区和平路318号"
    },
    {
        "id": "22ab410c-00f8-451f-9e9a-15d77be4babc",
        "name": "沈洋",
        "age": 36,
        "sex": 0,
        "birthday": "1989-07-09",
        "address": "山西省深圳市浦东新区黄河路15号"
    },
    {
        "id": "4d73da85-114b-450d-bbc0-60bffe730b55",
        "name": "韩杰",
        "age": 65,
        "sex": 1,
        "birthday": "1960-02-20",
        "address": "吉林省西安市天河区人民路318号"
    },
    {
        "id": "84c7098b-4264-45b9-bd8f-d15a2566eb73",
        "name": "陈磊",
        "age": 32,
        "sex": 1,
        "birthday": "1993-09-26",
        "address": "山西省深圳市天河区人民路28号"
    },
    {
        "id": "96f363e8-0883-45e6-b1cb-e3afb94a5df1",
        "name": "李娟",
        "age": 39,
        "sex": 1,
        "birthday": "1986-03-06",
        "address": "山西省深圳市海淀区长江路205号"
    },
    {
        "id": "20e90874-05de-4d70-914d-2af98df284ea",
        "name": "郑丽",
        "age": 50,
        "sex": 0,
        "birthday": "1975-07-12",
        "address": "河北省广州市金水区和平路318号"
    },
    {
        "id": "c9f2c147-1e0f-4263-a10e-19d58f3d00c0",
        "name": "褚娟",
        "age": 18,
        "sex": 1,
        "birthday": "2007-01-16",
        "address": "河北省杭州市雁塔区泰山街55号"
    },
    {
        "id": "7affc0f5-9ffe-4552-b378-52e6363fdf53",
        "name": "李军",
        "age": 38,
        "sex": 1,
        "birthday": "1987-05-09",
        "address": "吉林省郑州市黄浦区泰山街102号"
    },
    {
        "id": "ab6853d7-10ef-49d8-9f07-76a9f72e0b10",
        "name": "陈丽",
        "age": 45,
        "sex": 0,
        "birthday": "1980-07-10",
        "address": "河北省郑州市天河区光明路88号"
    },
    {
        "id": "8c2b623e-cb18-4476-b9db-f1e1c58753d3",
        "name": "孙洋",
        "age": 38,
        "sex": 0,
        "birthday": "1987-08-16",
        "address": "北京市上海市金水区建设路1号"
    },
    {
        "id": "817704e0-06c0-4ba3-a622-f27ba57b572b",
        "name": "孙军",
        "age": 27,
        "sex": 1,
        "birthday": "1998-07-06",
        "address": "辽宁省杭州市雁塔区建设路205号"
    },
    {
        "id": "3c5efd21-49c4-4a37-8217-2f388e376377",
        "name": "杨军",
        "age": 48,
        "sex": 1,
        "birthday": "1977-04-16",
        "address": "上海市上海市天河区黄河路28号"
    }
];
/**
 * 只要URL中包含"users"这个字符串，都会被这个规则拦截并处理。
 * 无论请求URL是：
  /users
  /users?page=1
  /api/users
  /users/123
  在js/ts中，用/包围的内容表示一个正则表达式
 */
Mock.mock(/users/, "get", (options: any) => {
  const params = new URLSearchParams(options.url.split('?')[1]);
  const page = parseInt(params.get('page') || '1') || 1;
  let size = parseInt(params.get('pageSize') || '10') || 10;
  const name = params.get('name') || '';
  let userList = cloneDeep(users);
  if (name) {
    userList = userList.filter((user:User) => 
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }
   // 计算分页数据
  const total = userList.length;
  const start = (page - 1) * size;
  const end = start + size;
  const list = userList.slice(start, end);
  
   return {
    code: 200,
    message: "success",
    data: list,
    total: total
  };
});
Mock.mock(/users/, "post", (request: any) => { 
  const data = JSON.parse(request.body);
  data.id = nanoid();
  users.unshift(data);
  return {
    code: 200,
    message: "success"
  };
});
Mock.mock(/users/, "put", (request: any) => { 
  const data = JSON.parse(request.body);
  users = users.map(user => 
    user.id === data.id ? data : user
  );
  return {
    code: 200,
    message: "success"
  };
});
Mock.mock(/users/, "delete", (request: any) => { 
  const params = new URLSearchParams(request.url.split('?')[1]);
  const id = params.get('id') || '';
  users = users.filter(user => user.id !== id);
  return {
    code: 200,
    message: "success"
  };
});