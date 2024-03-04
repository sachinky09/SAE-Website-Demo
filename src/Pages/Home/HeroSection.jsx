export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome to the official page of </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">SAE NIT Durgapur</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
          We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur
          <br />
            <br />Want to become part of<br />
            TEAM SAE?
          </p>
        </div>
        <button className="btn btn-primary"><a class="button-anchor" href="/join">Join Us</a></button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
