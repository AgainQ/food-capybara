import supabase from './supabase';

export async function getOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error);
    throw new Error('Orders could not be loaded');
  }

  return data;
}

export async function getOrder(id) {
  if (!id) {
    console.log('no id');
    throw new Error('Order ID is null or undefined');
  }

  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Order could not be loaded');
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
