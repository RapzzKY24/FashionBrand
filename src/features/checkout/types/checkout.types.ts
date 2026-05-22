import type { CartItem } from "../../product/store/store";

export type OrderStatus = "pending" | "paid" | "completed" | "cancelled";

export type PaymentStatus = "pending" | "paid" | "failed";

export type ShippingStatus = "pending" | "processing" | "shipped" | "delivered";

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

export type Cart = {
  items: CartItem[];
  total_items: number;
  total_price: number;
};

export type CheckoutItem = {
  id: string;
  product_id: string;
  product_name: string;
  product_slug: string;
  product_image: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export type TrackingHistory = {
  id: string;
  status: string;
  description: string;
  location: string;
  created_at: string;
};

export type Checkout = {
  id: string;
  order_number: string;
  subtotal: number;
  shipping: number;
  total: number;

  order_status: OrderStatus;
  payment_status: PaymentStatus;
  shipping_status: ShippingStatus;

  tracking_number: string;

  items: CheckoutItem[];
  tracking: TrackingHistory[];

  created_at: string;
  updated_at: string;
};

export type CreateCheckoutResponse = {
  status: string;
  message: string;
  data: Checkout;
};
