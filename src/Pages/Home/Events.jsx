import data from "../../data/index.json";

export default function Events() {
  return (
    <section className="event--section">
      
        <h2 className="event--section--heading">Our Events</h2>
      
      <div className="event--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="event--section--card">
            <div className="event--section--img">
              
            </div>
            <div className="event--section--card--content">
              <h3 className="event--section--title">{item.title}</h3>
              <p className="event--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
