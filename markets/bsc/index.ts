import { IBscConfiguration, eBscNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyBNB,
  strategyWETH,
  strategyBUSD,
  strategyAAVE,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const BscConfig: IBscConfiguration = {
  ...CommonsConfig,
  MarketId: 'Bsc Market',
  ProviderId: 4,
  ReservesConfig: {
    DAI: strategyDAI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    BUSD: strategyBUSD,
    WETH: strategyWETH,
    WBNB: strategyBNB,
    AAVE: strategyAAVE,
  },
  ReserveAssets: {
    [eBscNetwork.main]: {
      DAI: '',
      USDC: '',
      USDT: '',
      BUSD: '',
      WETH: '',
      WBNB: '',
      AAVE: '',
    },
    [eBscNetwork.test]: {
      // Mock tokens with a simple "mint" external function, except wmatic
      DAI: '',
      USDC: '',
      USDT: '',
      BUSD: '',
      WETH: '',
      WBNB: '',
      AAVE: '',
    },
  },
};

export default BscConfig;
