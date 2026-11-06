import beef from "../assets/beef.png";
import chicken from "../assets/chicken.png";
import dessert from "../assets/dessert.png";
import vegeterian from "../assets/vegeterian.png";
import { FaArrowRight } from "react-icons/fa";
const Catogories = () => {
    
      
        const category = [
            { name: "Beef", image: beef },
            { name: "Chicken", image: chicken },
            { name: "Dessert", image: dessert },
            { name: "Vegetarian", image: vegeterian },
        ];
          
          return (
    <>
                   <section className="mx-auto bg-ink-900 w-full max-w-8xl py-16">
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {category.map((category) => (
          <div
            key={category.name}
            className="group relative h-50 cursor-pointer overflow-hidden rounded-xl "
          >
            
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Bottom Dark Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16" />

            {/* Bottom Content */}
            <div className="absolute bottom-0 flex w-full items-center justify-between px-4 py-3">

              {/* Icon + Name */}
              <div className="flex items-center px-2 gap-3 text-cream bg-ink-800 rounded-lg ">
               

                <h3 className=" text-md font-semibold text-cream transition group-hover:text-gold-500">
                  {category.name}
                </h3>
              </div>

              {/* Arrow Button */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-800 text-cream transition duration-300  group-hover:bg-ink-900">
                <FaArrowRight className="text-xs" />
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
    </>
  )
}

export default Catogories
