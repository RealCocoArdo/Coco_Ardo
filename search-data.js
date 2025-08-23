const searchData = [

//  Bitcoin Knowledge
  {
    title: "Origins of money",
    url: "https://nakamotoinstitute.org/shelling-out/",
    content: "History excurs the evolution of money",
    tags: ["Coco_Ardo","Knowledge","History","evolution"]
  },
  {
    title: "Bitcoin Whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf",
    content: "The whitepaper, by Satoshi Nakomoto, is a document explaining Bitcoin. ",
    tags: ["Coco_Ardo","Knowledge","Blockchain","Transactions","document","Satoshi Nakamoto","Proof-of-Work","Proof of Work","POW","Verification","Verify","UTXO","UTXOs"]
  },
  {
    title: "Lightning Whitepaper",
    url: "https://lightning.network/lightning-network-paper.pdf",
    content: "This whitepaper is a descriptive document explaining the Lightning Network",
    tags: ["Coco_Ardo","Knowledge","Blockchain","Transactions","document", "l2","second layer","Lightning Network","Lightningnetwork","scalability"]
  },
  {
    title: "What is a Bitcoin fullnode?",
    url: "https://armantheparman.com/6reasonsnode/",
    content: "Why you should run your own Bitcoin fullnode",
    tags: ["Coco_Ardo","Knowledge","privately","Privacy","Anonym","Pseudonym","Blockchain","Hardware","Verification","Verify","dezentralization"]
  },
  {
    title: "What is the double spending problem?",
    url: "https://en.bitcoin.it/wiki/Irreversible_Transactions",
    content: "Bitcoin users protect themselves from double spending fraud by waiting for confirmations when receiving payments on the blockchain, the transactions become more irreversible as the number of confirmations rises.",
    tags: ["Coco_Ardo","Knowledge","Blockchain","Verification","Verify"]
  },
  {
    title: "What is the oracle problem?",
    url: "https://habla.news/de/a/naddr1qvzqqqr4gupzp3y2d7cf5q643v0v75qaut8qntynt0plcttnaad4jcm7wk7dmuj4qqxnzdenxyungvfsx5crjv33g8fyal",
    content: "A oracle is a source of information. In Bitcoin this information is whether some payment is valid or not. Therefor this information should be trustless and 100% be true.",
    tags: ["Coco_Ardo","Knowledge","Blockchain","Verification","Verify","security"]
  },
  {
    title: "What is the byzantine generals problem?",
    url: "https://bitcoinmagazine.com/glossary/what-is-the-byzantine-generals-problem",
    content: "The Byzantine Generals Problem is a game theory problem that reveals the challenges of achieving consensus among a group of mutually suspicious entities using unreliable communication channels",
    tags: ["Coco_Ardo","Knowledge","Blockchain","Verification","Verify"]
  },
  {
    title: "What is the blockchain trilemma?",
    url: "https://bitcoinmagazine.com/technical/lighting-network-makes-bitcoin-scalable",
    content: "Blockchains suffer from an inherent limitation which forces them to trade off between three qualities — one quality of their system has to go for the other two.",
    tags: ["Coco_Ardo","Knowledge","scalability","security","dezentralization","problem"]
  },

//  Bitcoin attacks
  {
    title: "What is the 51% attack?",
    url: "https://youtu.be/ncPyMUfNyVM",
    content: "Andreas Antonopolis explains what a 51% attack is. (Youtube)",
    tags: ["Coco_Ardo","problem","Pools","Pool","Proof-of-Work","Proof of Work","POW","security"]
  },
  {
    title: "Are quantum computers a threat to bitcoin?",
    url: "https://www.reddit.com/r/BitcoinBeginners/comments/qr9y2n/are_quantum_computers_a_threat_to_btc/hk5djbk?utm_medium=android_app&utm_source=share&context=3",
    content: "Quantum computers or supercomputers are computers that instead of solving one calculation after the other solve many calaculations at the same time.",
    tags: ["Coco_Ardo","problem","security","private key"]
  },

//  Bitcoin functions
  {
    title: "Understanding transaction fees",
    url: "https://www.youtube.com/watch?v=GN6PmCqFikw",
    content: "What are transaction fees and how high should they be",
    tags: ["Coco_Ardo","functions","Blockchain","UTXO","UTXOs","wallet"]
  },
    {
    title: "How to use coin control",
    url: "https://thebitcoinmanual.com/articles/what-is-coin-control",
    content: "What are UnspendTransactionOutputs (UTXOs) and how to use them",
    tags: ["Coco_Ardo","functions","Blockchain","transaction","UTXO","UTXOs","wallet"]
  },
    {
    title: "How to use RBF and CPFP",
    url: "https://web.archive.org/web/20241212135120/https://docs.samourai.io/en/wallet/features/miner-fees",
    content: "What are ReplaceByFee and ChildPaysForParent",
    tags: ["Coco_Ardo","functions","Blockchain","transaction","UTXO","UTXOs","Replace by fee","Child pays for parent","wallet"]
  },
    {
    title: "What are PSBT's?",
    url: "https://bitcoinops.org/en/topics/psbt/",
    content: "Partially Signed Bitcoin Transactions (PSBTs) are a data format that allows wallets to exchange information about a Bitcoin transaction and the signatures necessary to complete it.",
    tags: ["Coco_Ardo","functions","transaction","UTXO","UTXOs","coin control","PSBT","Partially Signed Bitcoin Transactions","coldwallet",]
  },
    {
    title: "How does LNURL-Auth work",
    url: "https://fiatjaf.com/e0a35204.html",
    content: "You may have seen the lnurl-auth spec or heard about it, but might not know how it works or what is its relationship with other lnurl protocols.",
    tags: ["Coco_Ardo","functions","LNURL","LNURLpay","LNURL-pay", "LNURLauth","LNURL-auth","transaction","lightning","Lightning Network","lightningnetwork"]
  },

//  Bitcoin Guides/ Using Bitcoin
  {
    title: "Where can I spent my Bitcoins?",
    url: "https://btcmap.org/map#3/0.00000/0.00000",
    content: "A map of bitcoin-friendly merchants around the world.",
    tags: ["Coco_Ardo","Buy","Purchase","Shop","Shops","Shopping","Stores","merchants","exchange","Map","Overview"]
  },
  {
    title: "How to mine Bitcoins?",
    url: "https://danheld.gay/",
    content: "A overview of Bitcoin mining resources.",
    tags: ["Coco_Ardo","danheld","ASIC","Pools","Pool","Solomining","Immersion","Equipment","Hardware","Heating","Proof-of-Work","Proof of Work","POW","Overview","security"]
  },
  {
    title: "Learn to code",
    url: "https://learning.chaincode.com/",
    content: "A overview of Bitcoin related coding resources by chaincode.",
    tags: ["Coco_Ardo","Programming","coding", "chaincode","Hacking","Lightning","Lightingnetwork","Python","Javascript","JS","Rust","C++","CPP","C#","HTLCs","Scripting","Application","Apps","Seminar","Course","Cource","Material","Development","Developing","Engeniering","Core","Verification","Verify","Overview"]
  },
  {
    title: "Buy/sell Bitcoin without KYC",
    url: "https://kycnot.me/?verification=verified&currency-mode=or&currencies=btc&currencies=fiat&currencies=cash&user-rating=4&min-score=8",
    content: "A no-kyc exchange overview",
    tags: ["Coco_Ardo","no-kyc","Purchase","exchange","privately","Privacy","Anonym","Pseudonym","Account","Overview"]
  },

//  Generel
  {
    title: "What is TOR?",
    url: "https://skerritt.blog/how-does-tor-really-work/",
    content: "The United States Naval Research Laboratory developed The Onion Routing Protocol (Tor) to protect U.S. intelligence communications online.",
    tags: ["Coco_Ardo","The Onion Routing","Communications"]
  },
  {
    title: "What is KYC?",
    url: "https://www.investopedia.com/terms/k/knowyourclient.asp",
    content: "Know Your Customer (KYC) is a standard that ensures advisors can verify a client's identity ",
    tags: ["Coco_Ardo","Know Your Customer","privately","Privacy","Anonym","Pseudonym","Account"]
  },
  {
    title: "What is PGP?",
    url: "https://proton.me/blog/what-is-pgp-encryption",
    content: "PGP is an encryption method that lets you communicate privately online.",
    tags: ["Coco_Ardo","encryption","Message","Messaging","Communications","privately","Privacy","Anonym","Pseudonym"]
  }
];

// Important Keywords:
// onchain, wallet, cold, hot, persona (satoshi, fin, etc), private and public key