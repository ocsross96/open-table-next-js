import { PrismaClient } from '@prisma/client';

import Header from './components/Header';
import SearchSidebar from './components/SearchSidebar';
import RestaurantCard from './components/RestaurantCard';

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantsByCity = (city: string | undefined) => {
  if (!city) {
    return prisma.restaurant.findMany();
  }

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      }
    }
  });
};

export default async function Search({
  searchParams
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  console.log({ restaurants });
  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSidebar />

        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
