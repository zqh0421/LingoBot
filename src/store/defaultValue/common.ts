import { IGlobalData } from "@/types/store/common";
export const defaultGlobalData: IGlobalData = {
  userCredential: {
    user: {
      uid: "",
      email: "",
      displayName: "",
      photoURL: "",
      refreshToken: "",
    },
    providerId: "",
    operationType: "",
  },
};
