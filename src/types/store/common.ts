export interface SerializedUserCredential {
  user: {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    refreshToken: string;
    // ... any other user properties you want to use
  };
  providerId: string | null;
  operationType: string;
  // if you need anything from _tokenResponse, extract it here
}

export interface IGlobalData {
  userCredential: SerializedUserCredential;
}
