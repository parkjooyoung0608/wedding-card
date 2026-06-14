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
      bank: "신한은행",
      accountNumber: "110-460-441668",
    },
    {
      role: "신랑 아버지",
      name: GROOM_FATHER,
      bank: "기업은행",
      accountNumber: "010-5284-7048",
    },
    {
      role: "신랑 어머니",
      name: GROOM_MOTHER,
      bank: "기업은행",
      accountNumber: "084-034289-02-022",
    },
  ],
  bride: [
    {
      role: "신부",
      name: BRIDE_FULL,
      bank: "하나은행",
      accountNumber: "488-910180-26307",
    },
    {
      role: "신부 아버지",
      name: BRIDE_FATHER,
      bank: "우체국",
      accountNumber: "103291-02-340747",
    },
    {
      role: "신부 어머니",
      name: BRIDE_MOTHER,
      bank: "하나은행",
      accountNumber: "488-910011-44307",
    },
  ],
};
