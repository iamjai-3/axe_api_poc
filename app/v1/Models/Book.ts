import { Model } from 'axe-api';
import IsLogged from '../Middlewares/IsLogged';

class Book extends Model {
  get middlewares() {
    return [IsLogged];
  }
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
