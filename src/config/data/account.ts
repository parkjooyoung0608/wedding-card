import {
  BRIDE_FATHER,
  BRIDE_FULL,
  BRIDE_MOTHER,
  GROOM_FATHER,
  GROOM_FULL,
  GROOM_MOTHER,
} from "@/config/config";

export const accountData = {
  groom: [
    {
      role: "신랑",
      name: GROOM_FULL,
      bank: "미정",
      accountNumber: "미정",
    },
    {
      role: "신랑 아버지",
      name: GROOM_FATHER,
      bank: "미정",
      accountNumber: "미정",
    },
    {
      role: "신랑 어머니",
      name: GROOM_MOTHER,
      bank: "미정",
      accountNumber: "미정",
    },
  ],
  bride: [
    {
      role: "신부",
      name: BRIDE_FULL,
      bank: "우리은행",
      accountNumber: "1002-154-650961",
    },
    {
      role: "신부 아버지",
      name: BRIDE_FATHER,
      bank: "미정",
      accountNumber: "미정",
    },
    {
      role: "신부 어머니",
      name: BRIDE_MOTHER,
      bank: "미정",
      accountNumber: "미정",
    },
  ],
};
