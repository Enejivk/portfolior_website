import "./contact.css";

const Contact = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_phie3fe", "template_sb6saio", form.current, {
  //       publicKey: "Okzs0fYLFRZT9SGrb",
  //     })
  //     .then(
  //       () => {
  //         console.log(e.target.name.value);

  //         emailjs.send(
  //           "service_phie3fe",
  //           "template_xiwojho",
  //           {
  //             name: e.target.name.value,
  //             email: e.target.email.value,
  //           },
  //           "Okzs0fYLFRZT9SGrb"
  //         );
  //         e.target.reset();
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <a href="mailto:sayyidmarvanvt@gmail.com" className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                sayyidmarvanvt@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/+971588405809"
              className="contact__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">0588405809</span>
            </a>

            <a
              href="tel:+971588405809"
              className="contact__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">0588405809</span>
            </a>
          </div>
        </div>

        {/* <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Type the message here"
              />
            </div>
            <button href="" className="button button--flex">
              Send
              <img src={send} alt="send icon" className="button__icon" />
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
