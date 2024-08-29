import { object, size, string, enums, partial, optional } from 'superstruct';
import { ROLE } from '../constants.js';

export const CreateUser = object({
  username: size(string(), 1, 10),
  password: string(),
  name: string(),
  role: enums(ROLE),
  studentId: optional(size(string(), 10)),
});

export const PatchUser = partial(CreateUser);
