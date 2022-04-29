import axios from "axios";

const validateKey: (key: string) => Promise<{
  licenseKey: string;
  gender: string;
  registeredAt: number;
  name: string;
  email: string;
  "Academic Year": string;
  expiresAt: number;
  major: string;
  faculty: string;
  coupon: string;
  currency: string;
  "NU ID": string;
  price: string;
  event_time: string;
  order_id: string;
  coupon_savings: string;
  phone: string;
}> = async (key) => {
  const { data } = await axios.post(
    "http://127.0.0.1/api/authKey",
    { key },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
    }
  );
  // const user = await fetch("http://127.0.0.1/api/authKey", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   body: JSON.stringify({
  //     key: key,
  //   }),
  //   mode: "no-cors",
  // });
  // const data = await user.json();
  if (data.msg) {
    return null;
  } else {
    return data.user;
  }
};

export default validateKey;
