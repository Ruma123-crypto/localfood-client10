const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-14">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Why Food Lovers Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Honest Reviews
            </h3>
            <p className="text-gray-600">
              Real food lovers share genuine experiences about
              local restaurants and street food.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Discover New Places
            </h3>
            <p className="text-gray-600">
              Explore hidden gems and popular food spots in
              your city.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Community Driven
            </h3>
            <p className="text-gray-600">
              Join a community of food enthusiasts sharing
              their favorite meals.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WhyChooseUs;