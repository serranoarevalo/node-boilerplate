import bcrypt from "bcrypt";

export const hashPassword = async (plain: string): Promise<string> =>
  bcrypt.hash(plain, 10);

export const checkPassword = async (
  hash: string,
  plain: string
): Promise<boolean> => bcrypt.compare(plain, hash);
