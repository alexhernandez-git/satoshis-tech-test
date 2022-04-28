import { atom } from "recoil";
import { UsersInterface } from "../types";

export default atom<UsersInterface>({
  key: "users",
  default: {
    results: [],
    info: null,
    loading: true,
    error: null,
  },
});
