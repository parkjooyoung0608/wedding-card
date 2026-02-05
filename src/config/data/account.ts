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
      bank: "국민은행",
      accountNumber: "799501-04-193447",
    },
    {
      role: "신랑 아버지",
      name: GROOM_FATHER,
      bank: "우리은행",
      accountNumber: "159-08-059947",
    },
    {
      role: "신랑 어머니",
      name: GROOM_MOTHER,
      bank: "국민은행",
      accountNumber: "580901-01-114382",
    },
  ],
  bride: [
    {
      role: "신부",
      name: BRIDE_FULL,
      bank: "하나은행",
      accountNumber: "298-891004-37007",
    },
    {
      role: "신부 아버지",
      name: BRIDE_FATHER,
      bank: "국민은행",
      accountNumber: "087-24-0394-411",
    },
    {
      role: "신부 어머니",
      name: BRIDE_MOTHER,
      bank: "국민은행",
      accountNumber: "777-21-0225-136",
    },
  ],
};
