
export function ContactForm() {

  return (
    <>
      <div id="contact-submission-form">  
        <form id="contact-form" action="https://formspree.io/f/xldeeoyq" method="POST" onSubmit={onSubmit}>
          <div id="contact-form-header">Contact Submission Form:</div>
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
            <input className="submit-btn" type="submit" value="Submit"/>
          </div>
        </form>
        <dialog className="modal" id="result-dialog">
        <div className="modal-content">
          <span id="modal-close" onClick={displayClose}>&times;</span>
        </div>
        <div id="modal-content">
          <p id="modal-message"></p>
        </div>
      </dialog>
    </div>
    </>
  )

  function onSubmit(event) {
    event.preventDefault();

    // This is how you access the form input fields:
      // event.target.firstName.value
      // event.target.lastName.value
      // event.target.email.value
      // event.target.message.value

    const url = "https://formspree.io/f/xldeeoyq";
    const data = new FormData(event.target);
  
    fetch(url, { 
                 method: 'POST', 
                 body: data,
                 headers: {
                  'Accept': 'application/json'
                 }
                }
    ).then(() => {
      displayResult("success");
      clearForm();
    }).catch((err) => {
      displayResult("failed", err);
    })
  }

  function displayResult(result, err) {
    
    const msg = document.getElementById("modal-message");
    msg.innerHTML = result === "success" ? 
                                 "Your message was submitted." :
                                 `Submission failed: ${JSON.stringify(err, null, 4)}`;

    const dlg = document.getElementById("result-dialog");
    dlg.showModal();
  }
  
  function displayClose() {
    const dlg = document.getElementById("result-dialog");
    dlg.close();
  }

  function clearForm() {
    document.getElementById("contact-form").reset();
  }
}
