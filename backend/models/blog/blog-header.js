class BlogHeader {
  constructor (title, abstract, cover, id = -1) {
    if (id !== -1) {
      this.id = id;
    }

    this._title = title;
    this._abstract = abstract;
    this._cover = cover;
    this.is_dirty = false;
  }
  get title () {
    return this._title;
  }
  set title (newTitle) {
    this._title = newTitle;
    this.is_dirty = true;
  }
  get abstract () {
    return this._abstract;
  }
  set abstract (newAbstract) {
    this._abstract = newAbstract;
    this.is_dirty = true;
  }
  get cover () {
    return this._cover;
  }
  set cover (newCover) {
    this._cover = newCover;
    this.is_dirty = true;
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
