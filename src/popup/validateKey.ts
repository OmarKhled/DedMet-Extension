import config from "../../config/config";

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
} | null> = async (key) => {
  try {
    const user = await fetch(`${config.domain}/api/authKey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: key,
      }),
      mode: "cors",
    });
    const data = await user.json();
    console.log(data);
    if (data.msg) {
      return null;
    } else {
      return data.user;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default validateKey;
