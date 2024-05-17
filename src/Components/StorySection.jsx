import "../assets/stylesheets/StorySection.css";

const StorySection = () => {
  return (
    <>
      <h2 className="text-center">Our Story</h2>
      <div className="story-container container mx-auto my-10">
        <div className="story-text">
          <h4>
            Welcome to our coffee haven, where every cup is a testament to our
            love for community and quality brews. Since our beginnings, we have
            been committed to crafting exceptional coffee experiences for all
            who enter our doors. Here, every sip tells a story, and every visit
            is an opportunity to savor the moment. Join us for a taste of warmth
            and camaraderie at our coffee shop, where every pour is poured with
            passion.
          </h4>
        </div>
        <div className="story-img">
          <img
            src="https://images.unsplash.com/photo-1540377904109-89bf2d99918a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjb2ZmZWUlMjBzaG9wfGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMHNob3AlMjBiYXJpc3RhfGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default StorySection;
