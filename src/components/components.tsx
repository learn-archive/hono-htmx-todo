export const ExampleComponent = () => <div hx-get="/home/example">Click me !</div>;

export const FormComponent = () => (
  <>
    <form hx-post="/home/contact" hx-target="#response">
      <div class="form-group">
        <label>Email Address</label>
        <input name="email" placeholder="test@gmail.com" value="test@gmail.com" />
      </div>
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" name="firstName" placeholder="john" value="john" />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" name="lastName" placeholder="doe" value="doe" />
      </div>
      <button type="submit" class="btn btn-default">
        Submit
      </button>
    </form>
    <div id="response"></div>
  </>
);
