export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  highlight?: boolean;
  dietary?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'specialty-coffee',
    title: 'Specialty Coffee',
    subtitle: 'Single Origin · Ethically Sourced',
    icon: '☕',
    items: [
      { name: 'Espresso', price: 4.50 },
      { name: 'Double Espresso', price: 5.00 },
      { name: 'Flat White', description: 'Our signature — micro-foam on single origin', price: 5.50, highlight: true },
      { name: 'Cappuccino', price: 5.50 },
      { name: 'Latte', price: 5.50 },
      { name: 'Long Black', price: 5.00 },
      { name: 'Piccolo Latte', price: 4.50 },
      { name: 'Cortado', price: 5.00 },
      { name: 'Cold Brew', description: 'Slow-steeped 18 hours, served over ice', price: 7.00, highlight: true },
      { name: 'Iced Latte', price: 6.50 },
      { name: 'Matcha Latte', description: 'Ceremonial grade Japanese matcha', price: 7.00, highlight: true },
      { name: 'Chai Latte', description: 'House-made spiced chai blend', price: 6.50 },
      { name: 'Alternative Milk', description: 'Oat / Almond / Soy / Macadamia', price: '+$0.70' },
    ],
  },
  {
    id: 'all-day-breakfast',
    title: 'All Day Breakfast',
    subtitle: 'Served Daily 5:00 AM – 3:00 PM',
    icon: '🍳',
    items: [
      { name: 'Smashed Avo & Feta', description: 'House sourdough, Persian feta, cherry tomatoes, dukkah, lemon', price: 22.00, highlight: true },
      { name: 'Big Bondi Breakfast', description: '2 free-range eggs, bacon, halloumi, mushroom, spinach, sourdough', price: 28.00, highlight: true },
      { name: 'Eggs Benedict', description: 'Slow-poached eggs, house-cured salmon, hollandaise on English muffin', price: 26.00, highlight: true },
      { name: 'Acai Bowl', description: 'Wild acai, banana, granola, fresh seasonal fruit, coconut flakes, honey', price: 22.00 },
      { name: 'Granola & Yoghurt', description: 'House granola, Meredith sheep yoghurt, seasonal compote', price: 18.00 },
      { name: 'Avo Toast', description: 'Avocado, sourdough, sea salt, chilli flakes', price: 18.00 },
      { name: 'Eggs Your Way', description: 'Scrambled / Poached / Fried on sourdough', price: 16.00 },
      { name: 'French Toast', description: 'Brioche, berry compote, crème fraîche, maple syrup', price: 22.00 },
      { name: 'Bircher Muesli', description: 'Apple, orange, honey, toasted almonds', price: 16.00 },
    ],
  },
  {
    id: 'brunch-lunch',
    title: 'Brunch & Lunch',
    subtitle: 'Served Daily 9:00 AM – 3:00 PM',
    icon: '🥑',
    items: [
      { name: 'Grilled Barramundi Bowl', description: 'Sushi rice, edamame, cucumber, pickled ginger, sesame dressing', price: 28.00, highlight: true },
      { name: 'Bondi Beef Burger', description: '180g Angus patty, aged cheddar, house pickles, brioche bun, fries', price: 26.00, highlight: true },
      { name: 'Smoked Salmon Bagel', description: 'House-cured salmon, cream cheese, capers, red onion, dill', price: 24.00 },
      { name: 'Chicken Caesar Wrap', description: 'Grilled chicken, cos, parmesan, house Caesar dressing, crispy bacon', price: 22.00 },
      { name: 'Falafel & Hummus Bowl', description: 'House falafel, whipped hummus, tabbouleh, sumac, pita', price: 22.00 },
      { name: 'Burrata & Heirloom Tomato', description: 'Fresh burrata, heirloom tomatoes, basil oil, sourdough crostini', price: 24.00 },
      { name: 'Crispy Fish Tacos', description: 'Beer-battered fish, slaw, chipotle mayo, jalapeño (x3)', price: 24.00 },
      { name: 'Garden Green Bowl', description: 'Quinoa, kale, avocado, roasted seeds, tahini lemon dressing', price: 22.00, dietary: 'VG GF' },
    ],
  },
  {
    id: 'smoothies-cold',
    title: 'Smoothies & Cold Drinks',
    subtitle: '',
    icon: '🥤',
    items: [
      { name: 'Bondi Sunrise', description: 'Mango, passionfruit, orange, pineapple', price: 12.00, highlight: true },
      { name: 'Green Machine', description: 'Spinach, banana, almond milk, honey, chia', price: 12.00 },
      { name: 'Berry Blast', description: 'Mixed berries, banana, coconut water, acai', price: 12.00 },
      { name: 'Tropical Twist', description: 'Coconut, pineapple, mango, lime', price: 12.00 },
      { name: 'Freshly Squeezed OJ', price: 9.00 },
      { name: 'Watermelon Juice', price: 9.00 },
      { name: 'Coconut Water', price: 7.00 },
      { name: 'Sparkling / Still Water', price: 5.00 },
      { name: 'Kombucha (rotating)', description: 'Ask your server for today\'s flavour', price: 8.00 },
    ],
  },
  {
    id: 'pastries-sweets',
    title: 'Pastries & Sweets',
    subtitle: 'Baked Fresh Daily',
    icon: '🥐',
    items: [
      { name: 'Butter Croissant', price: 6.00 },
      { name: 'Almond Croissant', price: 7.50, highlight: true },
      { name: 'Chocolate Croissant', price: 7.50 },
      { name: 'Banana Bread (toasted, butter)', price: 8.00 },
      { name: 'Blueberry Muffin', price: 6.50 },
      { name: 'Carrot & Walnut Cake', description: 'Cream cheese frosting', price: 9.50 },
      { name: 'Chocolate Brownie', price: 8.50 },
      { name: 'Cheesecake of the Day', description: 'Ask your server', price: 10.00 },
      { name: 'Acai Cheesecake', description: 'Wild acai, coconut base, passionfruit glaze', price: 11.00, highlight: true },
    ],
  },
  {
    id: 'cocktails-drinks',
    title: 'Cocktails & Beverages',
    subtitle: 'Served from 5:00 PM',
    icon: '🍹',
    items: [
      { name: 'Espresso Martini', description: 'Vodka, Kahlúa, fresh espresso shot, vanilla', price: 22.00, highlight: true },
      { name: 'Bondi Beach Cocktail', description: 'Passionfruit vodka, Malibu, pineapple, lime', price: 22.00, highlight: true },
      { name: 'Aperol Spritz', description: 'Aperol, Prosecco, soda, orange slice', price: 19.00 },
      { name: 'Hugo Spritz', description: 'St-Germain elderflower, Prosecco, mint, lime', price: 19.00 },
      { name: 'Watermelon Margarita', description: 'Tequila, fresh watermelon, lime, tajín rim', price: 22.00 },
      { name: 'Non-Alcoholic Mojito', description: 'Mint, lime, coconut water, soda', price: 13.00 },
      { name: 'Glass of Wine', description: 'White / Red / Rosé / Sparkling', price: '$14 – $16' },
      { name: 'Craft Beer (local)', description: 'Ask your server for today\'s taps', price: 12.00 },
      { name: 'Cider (draught)', price: 11.00 },
    ],
  },
];
