import { useTypedSelector } from "./useTypedSelector";

export const useMessage = () => useTypedSelector((state) => state.message);
