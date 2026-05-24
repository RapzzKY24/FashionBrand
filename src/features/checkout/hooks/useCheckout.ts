import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Address, Cart } from "../types/checkout.types";
import { CheckoutService } from "../services/checkout";

type UseCheckoutProps = {
  addresses: Address[];
  cart: Cart;
};

export const useCheckout = ({ addresses, cart }: UseCheckoutProps) => {
  const router = useRouter();

  const primaryAddress = addresses.find((item) => item.is_primary);

  const [selectedAddressId, setSelectedAddressId] = useState(
    primaryAddress?.id || addresses[0]?.id || "",
  );

  const [openAddressModal, setOpenAddressModal] = useState(false);

  const selectedAddress = useMemo(() => {
    return addresses.find((address) => address.id === selectedAddressId);
  }, [addresses, selectedAddressId]);

  const shipping = cart.items.length > 0 ? 15000 : 0;
  const discount = 0;
  const subtotal = cart.total_price;
  const total = subtotal + shipping - discount;

  const handleSelectAddress = (id: string) => {
    setSelectedAddressId(id);
    setOpenAddressModal(false);
  };

  const handleCheckout = async () => {
    if (!selectedAddressId) {
      toast.error("Please select a shipping address");
      return;
    }

    if (cart.items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const data = await CheckoutService.createCheckout(selectedAddressId);

    if (!data) return;

    router.push(`/users/orders/${data.id}`);
  };

  return {
    selectedAddressId,
    selectedAddress,
    openAddressModal,
    setOpenAddressModal,
    handleSelectAddress,
    handleCheckout,
    subtotal,
    shipping,
    discount,
    total,
    isCheckoutDisabled: !selectedAddressId || cart.items.length === 0,
  };
};
