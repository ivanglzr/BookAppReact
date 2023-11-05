import "../css/BookForm.css";

export default function BookForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
      </div>
      <div className="num-group">
        <label htmlFor="pages">Pages</label>
        <input type="text" name="pages" id="pages" />
        <label htmlFor="year">Year</label>
        <input type="text" name="year" id="year" />
      </div>
      <div className="form-group">
        <label htmlFor="language">Language</label>
        <select name="language" id="language"></select>
      </div>
    </form>
  );
}
