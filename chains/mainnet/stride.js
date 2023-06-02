module.exports = {
  chainID: 'stride-1',
  lcd: 'https://stride-fleet.main.stridenet.co/api',
  gasAdjustment: 1.75,
  gasPrices: { ustrd: 0 },
  prefix: 'stride',
  coinType: '118',
  baseAsset: 'ustrd',
  name: 'Stride',
  icon: process.env.CF_PAGES_URL + '/img/chains/Stride.png',
  ibc: {
    fromTerra: 'channel-46',
    toTerra: 'channel-52',
  },
  explorer: {
    address: 'https://www.mintscan.io/stride/account/{}',
    tx: 'https://www.mintscan.io/stride/txs/{}',
    validator: 'https://www.mintscan.io/stride/validators/{}',
    block: 'https://www.mintscan.io/stride/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ustrd',
      symbol: 'STRD',
      name: 'Stride',
      icon: process.env.CF_PAGES_URL + '/img/coins/Stride.png',
      decimals: 6,
    },
    {
      token: 'stuluna',
      symbol: 'stLUNA',
      name: 'Stride LUNA',
      icon: process.env.CF_PAGES_URL + '/img/coins/stLUNA.svg',
      decimals: 6,
      lsd: 'uluna',
    },
    {
      token: 'stuatom',
      symbol: 'stATOM',
      name: 'stATOM',
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
      decimals: 6,
    },
    {
      token: 'stustars',
      symbol: 'stSTARS',
      name: 'stSTARS',
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg',
      decimals: 6,
    },
    {
      token: 'stujuno',
      symbol: 'stJUNO',
      name: 'stJUNO',
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg',
      decimals: 6,
    },
    {
      token: 'stuosmo',
      symbol: 'stOSMO',
      name: 'stOSMO',
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
      decimals: 6,
    },
    {
      token: 'staevmos',
      symbol: 'stEVMOS',
      name: 'stEVMOS',
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg',
      decimals: 18,
    },
  ],
}
