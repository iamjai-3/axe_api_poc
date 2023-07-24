import { Model } from 'axe-api';

class Book extends Model {
  get fillable() {
    return ['name', 'author', 'price'];
  }

  get validations() {
    return {
      name: 'required|min:3|max:255',
      author: 'required|min:2|max:50',
      price: 'required|numeric'
    };
  }
}

export default Book;
