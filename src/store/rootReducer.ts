import { reducer as messageReducer } from "./message/message.slice";

export const rootReducer = {
  message: messageReducer,
};
