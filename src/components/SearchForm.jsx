import { Form, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form flex flex-col items-center">
      <div className="text-white mb-2">What would you like to drink?</div>
      <input
        type="search"
        name="search"
        className="form-input mb-2"
        defaultValue="martini"
      />
      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? "searching..." : "search"}
      </button>
    </Form>
  );
};

export default SearchForm;
