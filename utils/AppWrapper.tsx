"use client";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { PROJECT_WAGMI_CONFIG } from "./WagmiConfig";
import { Provider as JotaiProvider } from "jotai";
import {WalletProvider} from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WalletProvider>
      <JotaiProvider>
        <WagmiConfig config={PROJECT_WAGMI_CONFIG}>
          {mounted && children}
        </WagmiConfig>
      </JotaiProvider>
    </WalletProvider>
  );
}
