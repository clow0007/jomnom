import { Restaurant } from "../interface/restaurant";

export const RESTAURANTS: Restaurant[] = [
  { id: 1, name: 'Restaurant Horse', category: 'Dine in • Take away', rating: 5, cuisine: ["Others"], image: "../../../assets/images/horse.jpg" },
  { id: 2, name: 'Restoran Hero', category: 'Dine in', rating: 2, cuisine: ["Western", "Other"], image: "../../../assets/images/restaurant_1.jpg"},
  { id: 3, name: 'Restaurant Kandar', category: 'Dine in • Take away • Delivery', rating: 2, cuisine: ["Indian", "Mamak"], image: "../../../assets/images/kandar.jpg" },
  { id: 4, name: 'McDonalds', category: 'Dine in • Take away • Delivery', rating: 3, cuisine: ["Western", "Fast-Food"], image: "../../../assets/images/mekdi.jpg"},
  { id: 5, name: 'Restoran Mey Wey', category: 'Dine in • Take away', rating: 4, cuisine: ["Chinese"], image: "../../../assets/images/meywey.jpg" },
  { id: 6, name: 'De Western Rangers', category: 'Dine in', rating: 2, cuisine: ["Western"], image: "../../../assets/images/dewesternrangers.jpg" },
  { id: 7, name: 'Kedai Mamak Husin', category: 'Dine in • Take away • Delivery', rating: 2, cuisine: ["Mamak"], image: "../../../assets/images/mamakhusin.jpg" },
]
