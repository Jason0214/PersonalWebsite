class BlogHeader {
  constructor (title, abstract, cover, id) {
    this.id = id;
    this.title = title;
    this.abstract = abstract;
    this.cover = cover;
  }

  toJSON () {
    return {
      id: this.id,
      title: this.title,
      abstract: this.abstract,
      cover: this.cover
    };
  }
}

export default BlogHeader;
