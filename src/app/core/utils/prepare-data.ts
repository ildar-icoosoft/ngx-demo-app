// немного меняет формат данных поста, которые приходят с бэка. Переименовывает userId в user.
// Это нужно для нашего механизма нормализации. После денормализации в этом свойстве будет объект User
export const preparePost = (post: any) => {
  post.user = post.userId;
  delete post.userId;
  return post;
};
