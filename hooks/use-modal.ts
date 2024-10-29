import { create } from "zustand";

interface ModalData {
  title: string;
  description: string;
  children?: React.ReactNode;
}

interface ModalStore {
  isOpen: boolean;
  data: ModalData | null;
  closeModal: () => void;
  openModal: (title: string, description: string, children?: React.ReactNode) => void;
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  data: null,
  closeModal: () => set({ isOpen: false, data: null }),
  openModal: (title, description, children) =>
    set({
      isOpen: true,
      data: { title, description, children },
    }),
}));

export const openModal = (title: string, description: string, children: React.ReactNode) => {
  useModal.getState().openModal(title, description, children);
};
