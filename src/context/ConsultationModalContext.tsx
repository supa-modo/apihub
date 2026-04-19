import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ConsultationModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ConsultationModalContext =
  createContext<ConsultationModalContextValue | null>(null);

export const ConsultationModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen, openModal, closeModal],
  );

  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
    </ConsultationModalContext.Provider>
  );
};

export function useConsultationModal(): ConsultationModalContextValue {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error(
      "useConsultationModal must be used within ConsultationModalProvider",
    );
  }
  return ctx;
}
