import { useEffect, useState } from "react";
import { provider } from "@/lib/quicknode";

export function useMempool() {
  const [txs, setTxs] = useState<any[]>([]);

  useEffect(() => {
    const handleTx = (tx: any) => {
      setTxs((prev) => [tx, ...prev].slice(0, 50));
    };

    provider.on("pending", handleTx);
    return () => provider.off("pending", handleTx);
  }, []);

  return txs;
}
