export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    id: 'meal-deals',
    label: 'Meal Deals',
    items: [
      {
        name: 'The Lonely Bastard Box',
        price: '£14.97',
        description: "7\" Chicken Pizza, 1/4lb Dirty Bastard Burger with Fries and a Drink",
        image: '/LonelyBastardBox.JPG',
      },
      {
        name: 'The Dirty Duo Box',
        price: '£27.97',
        description: "12\" Chicken Pizza, 2x 1/4lb Grease Lord Burgers with 2x Fries and 2x Drinks",
        image: '/DirtyDuoBox.JPG',
      },
      {
        name: 'The Bastard Bloodline Bundle',
        price: '£49.97',
        description: "2x 12\" Pizzas, 4x Sin Stacker Burgers with 4x Dirty Fries and 1x Bottle of Coke",
        image: '/BloodlineBundle.JPG',
      },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    items: [
      {
        name: 'The Dirty Bastard Burger',
        price: '£8.97',
        description: '4oz Beef patty lavished in honey mustard, lettuce and tomato relish. Served in a brioche bun.',
        image: '/DirtyBastardBurger.JPG',
      },
      {
        name: 'Grease Lord Burger',
        price: '£9.97',
        description: 'Double beef patty, melted American cheese, crispy onions, house filthy sauce, toasted brioche bun.',
        image: '/GreaseLordBurger.JPG',
      },
      {
        name: 'Sin Stack Burger',
        price: '£10.97',
        description: 'Triple beef patty, beef bacon, cheddar, jalapeños, garlic mayo, and fire sauce in a brioche bun.',
        image: '/SinStackBurger.JPG',
      },
    ],
  },
  {
    id: 'pizzas',
    label: 'Pizzas',
    items: [
      {
        name: 'Chaos Chicken Pizza',
        price: '£11.97',
        description: 'Tomato base, mozzarella, spiced chicken, red onions, peppers, and inferno sauce.',
        image: '/ChaosChickenPizza.JPG',
      },
      {
        name: 'Meat Riot Pizza',
        price: '£12.97',
        description: 'Pepperoni, beef, chicken, sausage, mozzarella, and dark BBQ drizzle.',
        image: '/MeatRiotPizza.JPG',
      },
      {
        name: 'Sin Supreme Pizza',
        price: '£13.97',
        description: 'Pepperoni, chicken, mushrooms, olives, onions, green peppers and extra cheese.',
        image: '/SinSupremePizza.JPG',
      },
    ],
  },
  {
    id: 'pastas',
    label: 'Pastas',
    items: [
      {
        name: 'Creamy Carnage Pasta',
        price: '£9.97',
        description: 'Penne pasta in rich cream sauce with chicken, mushrooms and parmesan.',
        image: '/CreamyCarnagePasta.JPG',
      },
      {
        name: 'Inferno Meat Pasta',
        price: '£10.97',
        description: 'Fusilli pasta with beef mince, pepperoni, tomato sauce and chilli oil.',
        image: '/InfernoMeatPasta.JPG',
      },
      {
        name: 'Garlic Doom Alfredo',
        price: '£10.47',
        description: 'Tagliatelle in garlic cream sauce with chicken and melted mozzarella.',
        image: '/GarlicDoomAlfredo.JPG',
      },
    ],
  },
  {
    id: 'wraps',
    label: 'Wraps',
    items: [
      {
        name: 'Filthy Chicken Wrap',
        price: '£7.97',
        description: 'Crispy chicken, lettuce, cheese and dirty sauce wrapped in warm tortilla.',
        image: '/FilthyChickenWrap.JPG',
      },
      {
        name: 'Sin Beef Wrap',
        price: '£8.47',
        description: 'Spiced beef strips, onions, peppers, cheese and garlic mayo.',
        image: '/SinBeefWrap.JPG',
      },
      {
        name: 'Inferno Wrap',
        price: '£8.97',
        description: 'Chicken, jalapeños, hot sauce, cheese and chipotle mayo.',
        image: '/InfernoWrap.JPG',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        name: 'Acid Cola',
        price: '£2.47',
        description: 'Ice-cold classic cola served like a survival ration.',
        image: '/AcidCola.JPG',
      },
      {
        name: 'Neon Fizz',
        price: '£2.97',
        description: 'Lemon-lime fizzy drink with radioactive-level refreshment.',
        image: '/NeonFizz.JPG',
      },
      {
        name: 'Blood Orange Blast',
        price: '£2.97',
        description: 'Sparkling blood orange drink with savage citrus kick.',
        image: '/BloodOrangeBlast.JPG',
      },
    ],
  },
  {
    id: 'dips',
    label: 'Dips',
    items: [
      {
        name: 'Dirty Sauce',
        price: '£1.47',
        description: 'Creamy house sauce with garlic, spice and attitude.',
        image: '/DirtySauce.JPG',
      },
      {
        name: 'Inferno Dip',
        price: '£1.47',
        description: 'Hot chilli sauce built for pain lovers.',
        image: '/InfernoDip.JPG',
      },
      {
        name: 'Garlic Doom Dip',
        price: '£1.47',
        description: 'Thick garlic mayo with black pepper and herbs.',
        image: '/GarlicDoomDip.JPG',
      },
    ],
  },
];
