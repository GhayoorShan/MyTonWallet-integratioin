import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";

// import "@twa-dev/sdk";

function App() {
  const { connected } = useTonConnect();
  console.log("connected", connected);

  return (
    <div className="">
      <div className="">
        <TonConnectButton />

        <p>{connected ? "Connected" : "Not Connected"}</p>
      </div>
    </div>
  );
}

export default App;
