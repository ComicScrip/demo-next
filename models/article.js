import axios from 'axios';

export async function getArticles() {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data);
}

export async function getOneArticle(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);
}
