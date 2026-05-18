export type Profile = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type Address = {
  id: string;
  recipient_name: string;
  phone_number: string;
  province: string;
  city: string;
  district: string;
  postal_code: string;
  full_address: string;
  label: string;
  is_primary: boolean;
};

export type CartItem = {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export type Cart = {
  items: CartItem[];
  total_items: number;
  total_price: number;
};
