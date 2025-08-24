import { Product } from '../types';

export const products: Product[] = [
  // Cart 1: The Remote Worker's Setup
  {
    id: '1',
    name: 'Dell XPS 15 Laptop',
    description: 'A powerful and sleek ultrabook with a stunning InfinityEdge display, perfect for creative professionals and multitasking. Features an Intel Core i7 processor and 16GB of RAM.',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Computers & Laptops',
    inStock: true,
    rating: 4.8,
    reviews: 2847
  },
  {
    id: '2',
    name: 'Logitech MX Master 3S Mouse',
    description: 'An ergonomic wireless mouse designed for comfort and precision, featuring MagSpeed scrolling and a customizable workflow.',
    price: 99.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Computers & Laptops',
    inStock: true,
    rating: 4.7,
    reviews: 1923
  },
  {
    id: '3',
    name: 'Anker PowerCore Slim 10000 Power Bank',
    description: 'A thin and lightweight portable charger with a 10,000mAh capacity, providing a full charge for most smartphones.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4200740/pexels-photo-4200740.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile Accessories',
    inStock: true,
    rating: 4.6,
    reviews: 5672
  },

  // Cart 2: The Ultimate Gamer's Kit
  {
    id: '4',
    name: 'PlayStation 5 Console',
    description: 'The latest gaming console from Sony, offering lightning-fast loading, an immersive haptic controller, and a vast library of exclusive titles.',
    price: 499.99,
    image: 'https://images.pexels.com/photos/9072316/pexels-photo-9072316.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gaming',
    inStock: true,
    rating: 4.9,
    reviews: 8932
  },
  {
    id: '5',
    name: 'Razer BlackWidow V3 Pro Keyboard',
    description: 'A wireless mechanical gaming keyboard with Razer Green mechanical switches for a satisfying clicky feel and a durable build.',
    price: 179.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gaming',
    inStock: true,
    rating: 4.7,
    reviews: 3456
  },
  {
    id: '6',
    name: 'SteelSeries Arctis 7+ Wireless Headset',
    description: 'A high-performance wireless headset with a comfortable design, clear audio, and a long-lasting battery, perfect for long gaming sessions.',
    price: 169.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gaming',
    inStock: true,
    rating: 4.8,
    reviews: 2987
  },

  // Cart 3: Home Theater Enthusiast
  {
    id: '7',
    name: 'LG C2 65-inch OLED TV',
    description: 'A premium 4K OLED TV with self-lit pixels, delivering infinite contrast, perfect blacks, and vibrant colors for a cinematic experience.',
    price: 1999.99,
    image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Audio & Video',
    inStock: true,
    rating: 4.9,
    reviews: 4521
  },
  {
    id: '8',
    name: 'Sonos Arc Soundbar',
    description: 'A smart soundbar that provides a powerful and immersive home theater experience with Dolby Atmos, crystal-clear dialogue, and a sleek design.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Audio & Video',
    inStock: true,
    rating: 4.8,
    reviews: 1876
  },

  // Cart 4: Mobile On-the-Go
  {
    id: '9',
    name: 'Apple iPhone 15 Pro',
    description: 'A state-of-the-art smartphone with a titanium design, a powerful A17 Pro chip, and a pro-grade camera system for stunning photos and videos.',
    price: 1099.99,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile & Smart Devices',
    inStock: true,
    rating: 4.8,
    reviews: 12456
  },
  {
    id: '10',
    name: 'Apple AirPods Pro (2nd Generation)',
    description: 'Wireless earbuds with active noise cancellation, a comfortable fit, and spatial audio for an immersive listening experience.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile & Smart Devices',
    inStock: true,
    rating: 4.7,
    reviews: 8934
  },

  // Cart 5: Smart Home Starter Pack
  {
    id: '11',
    name: 'Google Nest Hub (2nd Gen)',
    description: 'A smart display with Google Assistant built-in, allowing you to control smart devices, view your calendar, and play music with just your voice.',
    price: 99.99,
    image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smart Home',
    inStock: true,
    rating: 4.6,
    reviews: 3245
  },
  {
    id: '12',
    name: 'Ring Video Doorbell 4',
    description: 'A smart doorbell with 1080p HD video, two-way talk, and enhanced motion detection to keep your home secure.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smart Home',
    inStock: true,
    rating: 4.5,
    reviews: 5687
  },

  // Additional products
  {
    id: '13',
    name: 'Sony Alpha a6400 Mirrorless Camera',
    description: 'A compact and versatile mirrorless camera with fast autofocus, 4K video recording, and a flip-out screen, ideal for vlogging and photography.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cameras',
    inStock: true,
    rating: 4.8,
    reviews: 2134
  },
  {
    id: '14',
    name: 'Microsoft Surface Go 3',
    description: 'A lightweight and portable 2-in-1 tablet that\'s perfect for taking notes, writing papers, and entertainment on the go.',
    price: 549.99,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tablets',
    inStock: true,
    rating: 4.4,
    reviews: 1876
  },
  {
    id: '15',
    name: 'Apple Watch Series 9',
    description: 'A cutting-edge smartwatch with advanced health monitoring features, including ECG and blood oxygen tracking, plus a bright, always-on display.',
    price: 399.99,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wearables',
    inStock: true,
    rating: 4.7,
    reviews: 6789
  },
  {
    id: '16',
    name: 'DJI Mini 3 Pro Drone',
    description: 'A compact and lightweight drone with a 4K camera, tri-directional obstacle sensing, and a flight time of up to 34 minutes.',
    price: 759.99,
    image: 'https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Drones',
    inStock: true,
    rating: 4.9,
    reviews: 1234
  }
];

export const categories = [
  'All Categories',
  'Computers & Laptops',
  'Mobile & Smart Devices',
  'Gaming',
  'Audio & Video',
  'Smart Home',
  'Cameras',
  'Tablets',
  'Wearables',
  'Drones',
  'Mobile Accessories'
];