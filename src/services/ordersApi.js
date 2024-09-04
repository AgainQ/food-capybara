import supabase from './supabase';

export async function getOrders() {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    console.log(error);
    throw new Error('Orders could not be loaded');
  }

  return data;
}

export async function placeOrder(newOrder) {
  const { data, error } = await supabase.from('orders').insert([newOrder]).select();

  if (error) {
    console.log(error);
    throw new Error('Could not place order');
  }

  return data;
}
