import { OrderService } from "../services/orders";
import { OrdersClient } from "./OrdersClient";

export default async function OrdersPage() {
  const orders = await OrderService.getOrders();
  return <OrdersClient orders={orders} />;
}
