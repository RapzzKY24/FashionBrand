import { ShippingStatus } from "../../orders/types/orders.types";

export const PROGRESS_MAP: Record<ShippingStatus, number> = {
  pending: 0,
  packed: 35,
  in_transit: 75,
  delivered: 100,
};

export const STATUS_LABEL_MAP: Record<ShippingStatus, string> = {
  pending: "Pending",
  packed: "Processing",
  in_transit: "In Transit",
  delivered: "Delivered",
};

export const TIMELINE_STEPS = [
  "Order Placed",
  "Processing",
  "Shipped",
  "In Transit",
  "Delivered",
] as const;
