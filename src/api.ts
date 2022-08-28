import axios from "axios";

export async function refund(
  app_user_id: string,
  store_transaction_id: string,
  secret_key: string
) {
  try {
    const res = await axios.post(
      `https://api.revenuecat.com/v1/subscribers/${app_user_id}/transactions/${store_transaction_id}/refund`,
      undefined,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${secret_key}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function debugUser(app_user_id: string, secret_key: string) {
  try {
    const res = await axios.get(
      `https://api.revenuecat.com/v1/subscribers/${app_user_id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${secret_key}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (res) {
      console.log(res);
    } else {
      console.log("An error occurred.");
    }
  } catch (error) {
    console.log(error);
  }
}
