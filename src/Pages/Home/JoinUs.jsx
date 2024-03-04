import Swal from 'sweetalert2';
export default function ContactUs() {
  const handleAlertClick=()=>{
    Swal.fire('Thank you,\nYor Response has been recorded');
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="sub--title">Be a part of team SAE</h1>
        <h2>Please fill the form below...</h2>
        <p className="text-lg">
          
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Full Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Your Semester </span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a domain</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Choose one(Mention below in case of more)</option>
            <option>Web development</option>
            <option>Robotics and Automobile</option>
            <option>Event Management</option>
            <option>Graphic Design</option>
            <option>Video Editing</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Describe your interests and prior experiences</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Write your answer here...."
          />
        </label>
        
        <div>
          <button onClick={handleAlertClick} className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
