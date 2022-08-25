function Form({updateFormData}) {
  return (
    <div className="App">
      <h2>Introduction</h2>
      <form onSubmit={updateFormData}>
        <label>
          First Name
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" />
        </label>
        <label>
          Role
          <input type="text" name="role" />
        </label>
        <label>
          Profile Picture
          <input type="text" name="profilePicture" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
