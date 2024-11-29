
export function ContactForm() {

  return (
    <>
      <h1 id="contact">Contact</h1>
      {/* <form action="https://formspree.io/f/xldeeoyq" method="POST"> */}
      <form className="contact-form" action="" method="">
        <div className="form-row">
          <input className="form-input"
            required
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
          />
        </div>
        <div className="form-row">
          <input className="form-input"
            required
            type="text"
            name="last-name"
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
}
