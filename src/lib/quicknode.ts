import { WebSocketProvider } from "ethers";


// console.log("Environment Variables:", process.env.QUICKNODE_WSS_API); // Add this line

const QUICKNODE_WS_URL = "wss://omniscient-neat-darkness.quiknode.pro/dfccb0e4e2f4c0f5f4bda2722f7a8dce1287b833";

if (!QUICKNODE_WS_URL) {
  throw new Error("Missing QuickNode WebSocket URL in env variables");
}

export const provider = new WebSocketProvider(QUICKNODE_WS_URL);
