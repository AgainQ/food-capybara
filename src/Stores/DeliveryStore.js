import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// prettier-ignore
import { testAddress, tipOptions, testDeliveryOptions } from '../Data/testDeliveryData';

export const useDeliveryStore = create(
  devtools((set) => ({
    deliveryOptions: testDeliveryOptions,
    selectedDelivery: testDeliveryOptions[0],

    paymentMethod: '',
    deliveryAddress: testAddress,
    deliveryInstructions: '',
    leaveAtTheDoor: false,
    riderTipOptions: tipOptions,
    riderTip: { value: 10, id: 'grsn11s' },

    selectDelivery: (deliveryOption) => {
      set({ selectedDelivery: deliveryOption });
    },
    setAddress: (address) => {
      set({ deliveryAddress: address });
    },
    setInstructions: (instructions) => {
      set({ deliveryInstructions: instructions });
    },
    toggleLeaveAtTheDoor: () => {
      set((state) => ({ leaveAtTheDoor: !state.leaveAtTheDoor }));
    },
    setRiderTip: (tip) => {
      set({ riderTip: tip });
    },
    setPaymentMethod: (method) => {
      set({ paymentMethod: method });
    },

    resetDeliveryStore: () => {
      set({
        selectedDelivery: testDeliveryOptions[0],
        deliveryInstructions: '',
        riderTip: { value: 10, id: 'grsn11s' },
      });
    },
  }))
);
