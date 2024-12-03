
export function ContactForm() {

  return (
    <>
      <h1 id="contact">Contact</h1>
      <form action="https://formspree.io/f/xldeeoyq" method="POST" onSubmit={onSubmit}>
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
    // console.log("onSubmit() called");
    // console.log(`First Name: ${event.target.firstName.value}`);
    // console.log(`Last Name: ${event.target.lastName.value}`);
    // console.log(`Email: ${event.target.email.value}`);
    // console.log(`Message: ${event.target.message.value}`);
    
    const url = "https://formspree.io/f/xldeeoyq";
    const data = new FormData(event.target);
    console.log(`onSubmit() data: ${JSON.stringify(data, null, 4)}`);

    fetch(url, { 
                 method: 'POST', 
                 body: data,
                 headers: {
                  'Accept': 'application/json'
                 }
                }
    ).then(() => {
      console.log(`submit success`);
      //Open the modal dialog
    }).catch((err) => {
      console.log(`submit error: ${JSON.stringify(err, null, 4)}`);
      //Show an error modal dialog
    })
  }
}
