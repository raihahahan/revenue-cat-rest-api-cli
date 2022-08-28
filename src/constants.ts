export const main_instructions =
  "Usage: npm start arg_0 [args]\n\narg_0:\n0: Refund\n1: Debug user";

export const strings = {
  instructions: main_instructions,
  usage_0: "Usage: npm start 0 app_user_id store_transaction_id",
  usage_1: "Usage: npm start 1 app_user_id",
  default:
    "Unknown command. Please see the list of available commands below:\n\n" +
    main_instructions,
};
