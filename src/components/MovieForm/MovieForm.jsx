import toast from "react-hot-toast";
import css from "./MovieForm.module.css";

export default function MovieForm  ({ onSearch }){
  const hendleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.elements.query.value.trim();
    if (result === "") {
      toast.error("Please, enter search params!");
      onSearch("");
    }

    onSearch(result);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={hendleSubmit}>
      <input
        type="text"
        name="query"
        className={css.input}
        required
        autoFocus
        placeholder=""
      />
      <button className={css.btn} type="submit" title="Search"><span>Search</span>
      </button>
    </form>
  );
};
