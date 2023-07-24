import { Model } from 'axe-api';

class Order extends Model {
  get fillable() {
    return ['book_id', 'user_id', 'quantity'];
  }

  get validations() {
    return {
      book_id: 'required|numeric',
      user_id: 'required|numeric',
      quantity: 'required|numeric'
    };
  }
  user() {
    return this.hasOne('User', 'id', 'user_id');
  }

  book() {
    return this.hasOne('Book', 'id', 'book_id');
  }
}

export default Order;
