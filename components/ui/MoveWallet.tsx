"use client";
import React, { useMemo, useState,useEffect } from "react";
import Image from "next/image";
import { useWallet, ConnectModal } from "@suiet/wallet-kit";

const MoveWallet = () => {
  const wallet = useWallet();
  const [showModal, setShowModal] = useState(false);
  const [address,setAddress] = useState("");

  const shortAddress = useMemo(() => {
    if (!address) return "";
    return address.slice(0, 5) + "..." + address.slice(-4);
  }, [address]);

  useEffect(() => {
    if (wallet.connected) {
      setAddress(wallet.address as string);
      setShowModal(false);
    }
  }, [wallet]);

  const WalletTitle = () => {
    if (wallet.connecting) {
      return "Connecting";
    } else if (!wallet.connected) {
      return "Connect Wallet";
    } else {
      return `${shortAddress}`;
    }
  };

  return (
    <ConnectModal open={showModal} onOpenChange={(open) => setShowModal(open)}>
      <div
        className="cb-border-h rounded-15 bg-white flex mt-[10px] gap-[13px] h-[49px] items-start"
      >
        <Image
          className="w-[21px] h-[21px] ml-6 mt-[14px]"
          src="/wallet-icon.svg"
          alt=""
          width={21}
          height={21}
        />
        <p className="font-medium leading-[21px] text-[16px] mt-[15px] mr-[25px]">
          <WalletTitle />
        </p>
      </div>
    </ConnectModal>

  );
};

export default MoveWallet;