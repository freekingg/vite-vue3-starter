
import axios from '../utils/axios'


class Book {
  // constructor() {}
  async createBook(data: any) {
    return axios({
      method: 'post',
      url: 'v1/book',
      data,
    })
  }

  async getBook(data: any) {
    return axios({
      method: 'post',
      url: 'v1/book',
      data,
    })
  }
}

export default new Book()
