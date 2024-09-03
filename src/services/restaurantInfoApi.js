import supabase from './supabase';

export async function getRestaurantInfo() {
  const { data: restaurantInfo, error } = await supabase
    .from('restaurant_info')
    .select('*')
    .single();

  if (error) {
    console.log(error);
    throw new Error('Restaurant info could not be received');
  }

  return restaurantInfo;
}
