import axios from 'axios';

export function fetchCategories() {
  return new Promise<{ data: number }>((resolve) => {
      axios.get(`https://api.thecatapi.com/v1/categories`)
        .then(res => {
          resolve({
            data: res.data
          });
        });
    }
  );
}
