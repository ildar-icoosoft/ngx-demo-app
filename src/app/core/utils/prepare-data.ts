// функции немного меняют формат данных, которые приходят с бэка. Например переименовывают userId в user.
// Это нужно для нашего механизма нормализации. После денормализации в этом свойстве будет объект User

export const preparePost = (post: any) => {
  post.user = post.userId;
  delete post.userId;
  return post;
};

export const prepareAlbum = (album: any) => {
  album.user = album.userId;
  delete album.userId;
  return album;
};

export const preparePhoto = (photo: any) => {
  photo.album = photo.albumId;
  delete photo.albumId;
  return photo;
};
