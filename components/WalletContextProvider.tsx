import { useMemo, ReactNode, FC } from "react"
import { clusterApiUrl } from "@solana/web3.js"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"

require("@solana/wallet-adapter-react-ui/styles.css")

const WalletContextProvider: FC<{children: ReactNode}> = ({children, ...props}:any) => {
  const url = useMemo(() => clusterApiUrl('devnet'), [])
  const phantom = new PhantomWalletAdapter()

  return (
    <ConnectionProvider endpoint={url}>
      <WalletProvider wallets={[phantom]}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletContextProvider