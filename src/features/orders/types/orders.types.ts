export type OrderStatus = 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed';
export type ShippingStatus = 'pending' | 'packed' | 'in_transit' | 'delivered';

export interface Address {
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
}

export interface OrderItem {
  id: string;
  product_id: string;
  product_name: string;
  product_slug: string;
  product_image: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface OrderTracking {
  id: string;
  status: string;
  description: string;
  location: string;
  created_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  subtotal: number;
  shipping: number;
  total: number;
  order_status: OrderStatus;
  payment_status: PaymentStatus;
  shipping_status: ShippingStatus;
  tracking_number: string;
  items: OrderItem[];
  tracking: OrderTracking[];
  created_at: string;
  updated_at: string;
}
