import { Model } from 'axe-api';

class User extends Model {
  get fillable() {
    return ['email', 'first_name', 'last_name', 'password'];
  }

  get validations() {
    return {
      email: 'required|min:3|max:255|email',
      first_name: 'required|min:2|max:50',
      last_name: 'required|min:2|max:50',
      password: 'required|min:6|max:100'
    };
  }

  get hiddens() {
    return ['password'];
  }
}

export default User;
