/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import menu1 from '../../../public/menu1.jpg';
import menu2 from '../../../public/menu2.jpg';
import menu3 from '../../../public/menu3.jpg';
import menu4 from '../../../public/menu4.jpg';
import menu5 from '../../../public/menu5.jpg';
import menu6 from '../../../public/menu6.jpg';
import menu7 from '../../../public/menu7.jpg';
import menu8 from '../../../public/menu8.jpg';

const foodMenu = {
  burger: [
    {
      name: 'Classic Hamburger',
      price: 6.45,
      image: menu1,
      id: 1,
      description: {
        short: 'Classic Hamburger with 100% beef patty',
        full: 'Our Classic Hamburger is made with a juicy 100% beef patty, fresh lettuce, tomato, onion, pickles, and our special sauce on a toasted bun. It’s the perfect combination of flavor and texture!',
      },
      reviews: {
        rating: 4.8,
        reviews: [
          {
            name: 'John Doe',
            review: 'One of the best burgers I ever had!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review: 'Amazing flavor and juicy patty!',
            rating: 4.5,
          },
          {
            name: 'Bob Johnson',
            review: 'Great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'Decent burger, could be better.',
            rating: 3,
          },
        ],
      },
    },
    {
      name: 'BBQ Bacon Burger',
      price: 8.99,
      image: menu2,
      id: 2,
      description: {
        short: 'Juicy burger with crispy bacon and sweet BBQ sauce',
        full: 'Our BBQ Bacon Burger is a delicious combination of a juicy beef patty, crispy bacon, and sweet BBQ sauce. Served on a toasted bun with lettuce, tomato, and onion, it’s the perfect choice for any BBQ lover.',
      },
      reviews: {
        rating: 4.5,
        reviews: [
          {
            name: 'John Doe',
            review: 'One of the best burgers I ever had!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review:
							'The BBQ sauce was a little too sweet for my taste, but the bacon was crispy and delicious!',
            rating: 4,
          },
          {
            name: 'Bob Johnson',
            review: 'Great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review:
							'The burger was juicy and delicious, but I wish there was more bacon!',
            rating: 4.5,
          },
        ],
      },
    },
    {
      name: 'Classic Hamburger',
      price: 6.45,
      image: menu3,
      id: 3,
      description: {
        short: 'Classic Hamburger with 100% beef patty',
        full: 'Our Classic Hamburger is made with a juicy 100% beef patty, fresh lettuce, tomato, onion, pickles, and our special sauce on a toasted bun. It’s the perfect combination of flavor and texture!',
      },
      reviews: {
        rating: 4.8,
        reviews: [
          {
            name: 'John Doe',
            review: 'One of the best burgers I ever had!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review: 'Amazing flavor and juicy patty!',
            rating: 4.5,
          },
          {
            name: 'Bob Johnson',
            review: 'Great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'Decent burger, could be better.',
            rating: 3,
          },
        ],
      },
    },
    {
      name: 'BBQ Bacon Burger',
      price: 8.99,
      image: menu4,
      id: 4,
      description: {
        short: 'Juicy burger with crispy bacon and sweet BBQ sauce',
        full: 'Our BBQ Bacon Burger is a delicious combination of a juicy beef patty, crispy bacon, and sweet BBQ sauce. Served on a toasted bun with lettuce, tomato, and onion, it’s the perfect choice for any BBQ lover.',
      },
      reviews: {
        rating: 4.5,
        reviews: [
          {
            name: 'John Doe',
            review: 'One of the best burgers I ever had!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review:
							'The BBQ sauce was a little too sweet for my taste, but the bacon was crispy and delicious!',
            rating: 4,
          },
          {
            name: 'Bob Johnson',
            review: 'Great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review:
							'The burger was juicy and delicious, but I wish there was more bacon!',
            rating: 4.5,
          },
        ],
      },
    },
  ],
  nachos: [
    {
      name: 'Classic Nachos',
      price: 7.99,
      image: menu5,
      id: 5,
      description: {
        short: 'Classic Nachos with all your favorite toppings',
        full: 'Our Classic Nachos are made with crispy tortilla chips topped with melted cheese, beans, jalapeños, guacamole, sour cream, and your choice of beef or chicken. It’s the perfect snack to share with friends!',
      },
      reviews: {
        rating: 4.5,
        reviews: [
          {
            name: 'John Doe',
            review: 'The nachos were great, but a bit too spicy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the nachos, the guacamole was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The chicken was a bit dry, but overall good nachos.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Classic Nachos',
      price: 7.99,
      image: menu4,
      id: 6,
      description: {
        short: 'Classic Nachos with all your favorite toppings',
        full: 'Our Classic Nachos are made with crispy tortilla chips topped with melted cheese, beans, jalapeños, guacamole, sour cream, and your choice of beef or chicken. It’s the perfect snack to share with friends!',
      },
      reviews: {
        rating: 4.5,
        reviews: [
          {
            name: 'John Doe',
            review: 'The nachos were great, but a bit too spicy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the nachos, the guacamole was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The chicken was a bit dry, but overall good nachos.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Classic Nachos',
      price: 7.99,
      image: menu5,
      id: 7,
      description: {
        short: 'Classic Nachos with all your favorite toppings',
        full: 'Our Classic Nachos are made with crispy tortilla chips topped with melted cheese, beans, jalapeños, guacamole, sour cream, and your choice of beef or chicken. It’s the perfect snack to share with friends!',
      },
      reviews: {
        rating: 4.5,
        reviews: [
          {
            name: 'John Doe',
            review: 'The nachos were great, but a bit too spicy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the nachos, the guacamole was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The chicken was a bit dry, but overall good nachos.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Classic Nachos',
      price: 7.99,
      image: menu6,
      id: 8,
      description: {
        short: 'Classic Nachos with all your favorite toppings',
        full: 'Our Classic Nachos are made with crispy tortilla chips topped with melted cheese, beans, jalapeños, guacamole, sour cream, and your choice of beef or chicken. It’s the perfect snack to share with friends!',
      },
      reviews: {
        rating: 4.5,
        reviews: [
          {
            name: 'John Doe',
            review: 'The nachos were great, but a bit too spicy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the nachos, the guacamole was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The chicken was a bit dry, but overall good nachos.',
            rating: 3.5,
          },
        ],
      },
    },
  ],
  tacos: [
    {
      name: 'Chicken Soft Tacos',
      price: 9.99,
      image: menu7,
      id: 9,
      description: {
        short: 'Chicken Soft Tacos with all your favorite toppings',
        full: 'Our Chicken Soft Tacos are made with soft tortilla shells filled with our delicious chicken, lettuce, tomatoes, cheese, and your choice of salsa, guacamole, or sour cream. These tacos are sure to be a hit!',
      },
      reviews: {
        rating: 4.2,
        reviews: [
          {
            name: 'John Doe',
            review: 'The tacos were great, but a bit too spicy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the tacos, the guacamole was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The chicken was a bit dry, but overall good tacos.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Chicken Soft Tacos',
      price: 9.99,
      image: menu8,
      id: 10,
      description: {
        short: 'Chicken Soft Tacos with all your favorite toppings',
        full: 'Our Chicken Soft Tacos are made with soft tortilla shells filled with our delicious chicken, lettuce, tomatoes, cheese, and your choice of salsa, guacamole, or sour cream. These tacos are sure to be a hit!',
      },
      reviews: {
        rating: 4.2,
        reviews: [
          {
            name: 'John Doe',
            review: 'The tacos were great, but a bit too spicy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the tacos, the guacamole was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The chicken was a bit dry, but overall good tacos.',
            rating: 3.5,
          },
        ],
      },
    },
  ],
  bowls: [
    {
      name: 'Veggie Bowl',
      price: 8.99,
      image: menu1,
      id: 11,
      description: {
        short: 'Veggie Bowl with all your favorite toppings',
        full: 'Our Veggie Bowl is made with a base of quinoa and brown rice, topped with delicious roasted veggies, feta cheese, and your choice of a homemade dressing. This bowl is a great option for vegetarians and vegans!',
      },
      reviews: {
        rating: 4.7,
        reviews: [
          {
            name: 'John Doe',
            review: 'Delicious veggie bowl!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review: 'The quinoa and veggies were cooked to perfection!',
            rating: 4.5,
          },
          {
            name: 'Bob Johnson',
            review: 'Very filling and great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The feta cheese was a nice addition.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Veggie Bowl',
      price: 8.99,
      image: menu2,

      id: 12,
      description: {
        short: 'Veggie Bowl with all your favorite toppings',
        full: 'Our Veggie Bowl is made with a base of quinoa and brown rice, topped with delicious roasted veggies, feta cheese, and your choice of a homemade dressing. This bowl is a great option for vegetarians and vegans!',
      },
      reviews: {
        rating: 4.7,
        reviews: [
          {
            name: 'John Doe',
            review: 'Delicious veggie bowl!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review: 'The quinoa and veggies were cooked to perfection!',
            rating: 4.5,
          },
          {
            name: 'Bob Johnson',
            review: 'Very filling and great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The feta cheese was a nice addition.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Veggie Bowl',
      price: 8.99,
      image: menu3,

      id: 13,
      description: {
        short: 'Veggie Bowl with all your favorite toppings',
        full: 'Our Veggie Bowl is made with a base of quinoa and brown rice, topped with delicious roasted veggies, feta cheese, and your choice of a homemade dressing. This bowl is a great option for vegetarians and vegans!',
      },
      reviews: {
        rating: 4.7,
        reviews: [
          {
            name: 'John Doe',
            review: 'Delicious veggie bowl!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review: 'The quinoa and veggies were cooked to perfection!',
            rating: 4.5,
          },
          {
            name: 'Bob Johnson',
            review: 'Very filling and great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The feta cheese was a nice addition.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Veggie Bowl',
      price: 8.99,
      image: menu4,
      id: 14,
      description: {
        short: 'Veggie Bowl with all your favorite toppings',
        full: 'Our Veggie Bowl is made with a base of quinoa and brown rice, topped with delicious roasted veggies, feta cheese, and your choice of a homemade dressing. This bowl is a great option for vegetarians and vegans!',
      },
      reviews: {
        rating: 4.7,
        reviews: [
          {
            name: 'John Doe',
            review: 'Delicious veggie bowl!',
            rating: 5,
          },
          {
            name: 'Jane Smith',
            review: 'The quinoa and veggies were cooked to perfection!',
            rating: 4.5,
          },
          {
            name: 'Bob Johnson',
            review: 'Very filling and great value for the price!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The feta cheese was a nice addition.',
            rating: 3.5,
          },
        ],
      },
    },
  ],
  pizza: [
    {
      name: 'Pepperoni Pizza',
      price: 12.99,
      image: menu5,

      id: 15,
      description: {
        short: 'Pepperoni Pizza with all your favorite toppings',
        full: 'Our Pepperoni Pizza is made with our special pizza dough, topped with the perfect blend of cheese, pepperoni, and our homemade pizza sauce. This pizza is sure to satisfy any pizza lover!',
      },
      reviews: {
        rating: 4.4,
        reviews: [
          {
            name: 'John Doe',
            review: 'The pizza was great, but a bit too cheesy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the pizza, the pepperoni was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The crust was a bit too thick, but overall good pizza.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Pepperoni Pizza',
      price: 12.99,
      image: menu7,

      id: 16,
      description: {
        short: 'Pepperoni Pizza with all your favorite toppings',
        full: 'Our Pepperoni Pizza is made with our special pizza dough, topped with the perfect blend of cheese, pepperoni, and our homemade pizza sauce. This pizza is sure to satisfy any pizza lover!',
      },
      reviews: {
        rating: 4.4,
        reviews: [
          {
            name: 'John Doe',
            review: 'The pizza was great, but a bit too cheesy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the pizza, the pepperoni was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The crust was a bit too thick, but overall good pizza.',
            rating: 3.5,
          },
        ],
      },
    },
    {
      name: 'Pepperoni Pizza',
      price: 12.99,
      image: menu8,

      id: 17,
      description: {
        short: 'Pepperoni Pizza with all your favorite toppings',
        full: 'Our Pepperoni Pizza is made with our special pizza dough, topped with the perfect blend of cheese, pepperoni, and our homemade pizza sauce. This pizza is sure to satisfy any pizza lover!',
      },
      reviews: {
        rating: 4.4,
        reviews: [
          {
            name: 'John Doe',
            review: 'The pizza was great, but a bit too cheesy for my taste.',
            rating: 4,
          },
          {
            name: 'Jane Smith',
            review: 'Love the pizza, the pepperoni was the best!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            review: 'Good value for the price, will order again!',
            rating: 4,
          },
          {
            name: 'Mary Brown',
            review: 'The crust was a bit too thick, but overall good pizza.',
            rating: 3.5,
          },
        ],
      },
    },
  ],
};
const populer = [
  {
    name: 'Jalapino', price: 5.5, img: menu1, key: 1,
  },
  {
    name: 'Jalapino', price: 5.5, img: menu1, key: 2,
  },
  {
    name: 'Jalapino', price: 5.5, img: menu1, key: 3,
  },
];

const userdata = {
  name: '',
  cart: [],
};

const addToCart = (id) => {
  
};
export { populer, foodMenu };
