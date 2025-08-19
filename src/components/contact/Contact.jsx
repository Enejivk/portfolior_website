import "./contact.css";

const Contact = () => {


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <a href="mailto:enejivic@gmail.com" className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">enejivic@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
