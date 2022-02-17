const NETWORK = [
    {
        image: "public/static/images/bitkub-logo.png",
        chainId: "0x60",
        chainName: "Bitkub Chain",
        nativeCurrency: { name: "KUB Coin", symbol: "KUB", decimals: 18 },
        rpcUrls: ["https://rpc.bitkubchain.io"],
        blockExplorerUrls: ["https://bkcscan.com"]
    },
    // {
    //     image: "public/static/images/bitkub-logo.png",
    //     chainId: "0x13881",
    //     chainName: "Bitkub Chain",
    //     nativeCurrency: { name: "KUB Coin", symbol: "KUB", decimals: 18 },
    //     rpcUrls: ["https://rpc.bitkubchain.io"],
    //     blockExplorerUrls: ["https://bkcscan.com"]
    // },
    // {
    //     image: "public/static/images/BNB-logo.png",
    //     chainId: "0x56",
    //     chainName: "Binance Smart Chain",
    //     nativeCurrency: { name: "Binance", symbol: "BNB", decimals: 18 },
    //     rpcUrls: ["https://bsc-dataseed.binance.org/"],
    //     blockExplorerUrls: ["https://bscscan.com"]
    // },
    // {
    //     image: "public/static/images/BNB-logo.png",
    //     chainId: "0x42161",
    //     chainName: " Smart Chain – Testnet",
    //     nativeCurrency: { name: "Binance", symbol: "BNB", decimals: 18 },
    //     rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    //     blockExplorerUrls: ["https://testnet.bscscan.com"]
    // },
    {
        image: "public/static/images/poly-logo.png",
        chainId: "0x13881",
        chainName: "Polygon Testnet Mumbai",
        nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18, },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },

];

export default NETWORK
