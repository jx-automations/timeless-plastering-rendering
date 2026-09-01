"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ServiceId } from "@/lib/services";
import { ServiceDetailModal } from "./ServiceDetailModal";

interface ServiceModalContextValue {
  openService: (id: ServiceId) => void;
}

const ServiceModalContext = createContext<ServiceModalContextValue | null>(null);

export function useServiceModal() {
  const ctx = useContext(ServiceModalContext);
  if (!ctx) {
    throw new Error("useServiceModal must be used within a ServiceModalProvider");
  }
  return ctx;
}

export function ServiceModalProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<ServiceId | null>(null);

  const openService = useCallback((id: ServiceId) => setActiveId(id), []);
  const close = useCallback(() => setActiveId(null), []);

  const value = useMemo(() => ({ openService }), [openService]);

  return (
    <ServiceModalContext.Provider value={value}>
      {children}
      <ServiceDetailModal serviceId={activeId} onClose={close} />
    </ServiceModalContext.Provider>
  );
}
