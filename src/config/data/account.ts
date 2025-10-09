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
      bank: "토스은행",
      accountNumber: "123-456-789012",
    },
    {
      role: "신랑 아버지",
      name: GROOM_FATHER,
      bank: "토스은행",
      accountNumber: "123-456-789012",
    },
    {
      role: "신랑 어머니",
      name: GROOM_MOTHER,
      bank: "토스은행",
      accountNumber: "123-456-789012",
    },
  ],
  bride: [
    {
      role: "신부",
      name: BRIDE_FULL,
      bank: "카카오뱅크",
      accountNumber: "987-654-321098",
    },
    {
      role: "신부 아버지",
      name: BRIDE_FATHER,
      bank: "카카오뱅크",
      accountNumber: "987-654-321098",
    },
    {
      role: "신부 어머니",
      name: BRIDE_MOTHER,
      bank: "카카오뱅크",
      accountNumber: "987-654-321098",
    },
  ],
};
