import * as s from 'superstruct';
import { ROLE } from '../constants.js';

export const CreateUser = s.object({
  username: s.size(s.string(), 1, 10),
  password: s.string(),
  name: s.string(),
  role: s.enums(ROLE),
  studentId: s.size(s.string(), 10),
});

export const PatchUser = s.partial(CreateUser);
