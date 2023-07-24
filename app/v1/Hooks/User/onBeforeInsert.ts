import { IHookParameter } from 'axe-api';
import bcrypt from 'bcrypt';

export default async ({ formData }: IHookParameter) => {
  formData.password = bcrypt.hashSync(formData.password, 10);
};
