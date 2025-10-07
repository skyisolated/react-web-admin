import { Phone } from "@/types/home";
import { BASE_URL } from "@/utils/constant";
import Mock from "mockjs";
const prefix = BASE_URL;
Mock.mock(prefix + "/home-data", "get", () => {
  const phones: Phone[] = [
    {name: "oppo", todayPurchase: "500", monthlyPurchase: "3500", totalPurchase: "22000"},
    {name: "vivo", todayPurchase: "300", monthlyPurchase: "2200", totalPurchase: "24000"},
    {name: "苹果", todayPurchase: "800", monthlyPurchase: "4500", totalPurchase: "65000"},
    {name: "小米", todayPurchase: "1200", monthlyPurchase: "6500", totalPurchase: "45000"},
    {name: "三星", todayPurchase: "300", monthlyPurchase: "2000", totalPurchase: "34000"},
    {name: "魅族", todayPurchase: "350", monthlyPurchase: "3000", totalPurchase: "22000"}
  ]
  return {
    code: 200,
    message: "success",
    data: {
      phones
    },
  };
});