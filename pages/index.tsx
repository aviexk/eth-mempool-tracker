import { useMempool } from "@/hooks/useMempool";

export default function Home() {
  const txs = useMempool();

  return (
    <div className="bg-black text-green-400 min-h-screen p-6">
      <h1 className="text-3xl font-bold">Ethereum Mempool Tracker</h1>
      <ul className="mt-4 space-y-2">
        {txs.map((tx, index) => (
          <li key={index} className="bg-gray-900 p-3 rounded-lg shadow-md">
            {tx}
          </li>
        ))}
      </ul>
    </div>
  );
}
