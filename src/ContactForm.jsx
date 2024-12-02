
export function ContactForm() {

  return (
    <>
      <h1 id="contact">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <input className="form-input"
            required
            type="text"
            name="firstName"
            id="first-name"
            placeholder="First Name"
          />
        </div>
        <div className="form-row">
          <input className="form-input"
            required
            type="text"
            name="lastName"
            id="last-name"
            placeholder="Last Name"
          />
        </div>
        <div className="form-row">
          <input className="form-input"
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-row">
          <textarea className="form-input"
            required
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="What would you like to say?"
          ></textarea>
        </div>
        <div className="form-row">
          <input className="btn" type="submit" value="Submit"/>
        </div>
      </form>
    </>
  )

  function onSubmit(event) {
    event.preventDefault();
    console.log("onSubmit() called");
    console.log(`First Name: ${event.target.firstName.value}`);
    console.log(`Last Name: ${event.target.lastName.value}`);
    console.log(`Email: ${event.target.email.value}`);
    console.log(`Message: ${event.target.message.value}`);
    alert('Form submitted');
    // <form action="https://formspree.io/f/xldeeoyq" method="POST"></form>
  }
}
