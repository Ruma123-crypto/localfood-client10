const FoodCategories = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Food Categories{" "}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 m-3 gap-3'>
        <div className="card bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl">
          {/* Image */}
          <figure>
            <img src="https://i.ibb.co.com/F4hDTNhG/mortar-toasted-pastry.jpg" alt="" className="h-52 w-full object-cover" />
          </figure>

          <div className="card-body">
            {/* Food Name */}
            <h2 className="card-title text-black">Chitoy Pitha</h2>
            <p>Chitoi Pitha is a traditional Bangladeshi rice cake made from rice flour batter and cooked using steam in a special mold. It has a soft and light texture and is commonly served with coconut chutney, molasses, or mashed side dishes. This popular winter delicacy is especially enjoyed during cold mornings across rural Bangladesh.</p>
          </div>
        </div>


        <div className="card bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl">
          {/* Image */}
          <figure>
            <img src="https://i.ibb.co.com/4nW7pnQ5/kabita-darlami-90-SXZz-Jpy-Sc-unsplash.jpg" alt="" className="h-52 w-full object-cover" />
          </figure>

          <div className="card-body">
            {/* Food Name */}
            <h2 className="card-title text-black">Momo</h2>
                <p>Momo is a popular dumpling dish originally from Tibet and Nepal, widely loved across South Asia. It is made with thin dough filled with minced meat or vegetables and then steamed or fried. Momos are usually served with spicy chutney or sauce, making them a delicious and flavorful street food.</p>
          </div>
        </div>
        <div className="card bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl">
          {/* Image */}
          <figure>
            <img src="https://i.ibb.co.com/5hMpb2GT/jay-nlper-Xci-Y4hwqn-Nk-unsplash.jpg" alt="" className="h-52 w-full object-cover" />
          </figure>

          <div className="card-body">
            {/* Food Name */}
            <h2 className="card-title text-black">Fride Rice</h2>
            <p>Fried rice is a versatile and popular dish made by stir-frying cooked rice with vegetables, eggs, and sometimes meat or seafood. It is seasoned with soy sauce, garlic, and other spices to enhance flavor. Quick to prepare and satisfying, fried rice is enjoyed as a main dish or a side in many Asian cuisines.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
