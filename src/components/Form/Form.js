function Form() {
  const submitForm = () => {
    console.log('Submitted!')
  };

  return (
    <div className="App">
      <h2>Introduction</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName"></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName"></input>
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role"></input>
        <label htmlFor="profilePicture">Profile picture</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept="image/png, image/jpeg"
        />
        <input type="button" onClick={submitForm} value="Submit"></input>
      </form>
    </div>
  );
}

export default Form;
