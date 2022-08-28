import { debugUser, refund } from "./api";
import { strings } from "./constants";
import "dotenv/config";

export async function userInterface() {
  const type = process.argv[2];
  if (process.argv.length == 2) console.log(strings.instructions);

  switch (type) {
    case "0":
      if (process.argv.length != 5) {
        console.log(strings.usage_0);
        return;
      }
      const app_user_id = "$RCAnonymousID" + process.argv[3];
      const store_transaction_id = process.argv[4];
      await refund(app_user_id, store_transaction_id);
      break;
    case "1":
      if (process.argv.length != 4) {
        console.log(strings.usage_1);
        return;
      }
      const app_user_id_test = process.argv[3];
      await debugUser(app_user_id_test);
      break;
    default:
      if (process.argv.length != 2) console.log(strings.default);
      break;
  }
}
