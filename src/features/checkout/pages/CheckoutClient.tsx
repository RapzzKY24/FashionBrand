"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "@/src/components/AnimatedButton";
import { staggerContainer, staggerItem } from "@/src/animations/variants";
import Reveal from "@/src/animations/Reveal";
import { Address, Cart, Profile } from "../types/checkout.types";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import ContantInfomation from "../components/ContantInfomation";
import { ShippingAddress } from "../components/ShippingAddresses";
import { ShippingMethod } from "../components/ShippingMethod";
import { CheckoutSummary } from "../components/CheckoutSummary";
import { AddressModal } from "../components/ModalListAddress";
import { useCheckout } from "../hooks/useCheckout";

type Props = {
  profile: Profile;
  addresses: Address[];
  cart: Cart;
};

export const CheckoutClient = ({ profile, addresses, cart }: Props) => {
  const {
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
    isCheckoutDisabled,
  } = useCheckout({ addresses, cart });

  return (
    <section className="w-full overflow-hidden px-16 py-6 pt-26">
      <Reveal>
        <HeaderBreadcrumb />
      </Reveal>

      <motion.div
        className="grid grid-cols-12 items-start gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
      >
        <motion.div
          variants={staggerItem}
          className="col-span-8 flex flex-col gap-5"
        >
          <ContantInfomation profile={profile} />

          <ShippingAddress
            address={selectedAddress}
            onChangeAddress={() => setOpenAddressModal(true)}
          />

          <AddressModal
            open={openAddressModal}
            addresses={addresses}
            selectedAddressId={selectedAddressId}
            onSelectAddress={handleSelectAddress}
            onClose={() => setOpenAddressModal(false)}
          />

          <ShippingMethod />

          <div className="flex items-center justify-between pt-2">
            <AnimatedButton
              href="/cart"
              className="flex h-14 w-72 items-center justify-center gap-3 rounded-md bg-transparent outline outline-gray-400 font-roboto text-sm uppercase tracking-[0.12em] text-black disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
            >
              <ArrowLeftIcon size={16} />
              Back to Cart
            </AnimatedButton>

            <AnimatedButton
              onClick={handleCheckout}
              disabled={isCheckoutDisabled}
              className="flex h-14 w-72 items-center justify-center gap-3 rounded-md bg-black font-roboto text-sm uppercase tracking-[0.12em] text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
            >
              Continue to Payment
              <ArrowRightIcon size={16} />
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div variants={staggerItem} className="col-span-4">
          <CheckoutSummary
            cart={cart}
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
