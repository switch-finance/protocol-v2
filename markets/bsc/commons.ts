import {
  oneRay,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneEther,
} from '../../helpers/constants';
import { ICommonConfiguration, eBscNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave Bsc Market',
  StableDebtTokenNamePrefix: 'Aave stable debt bearing',
  VariableDebtTokenNamePrefix: 'Aave variable debt bearing',
  SymbolPrefix: 'b',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WBNB: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    AAVE: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    BUSD: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eBscNetwork.main]: '0xe60F698D4D124D1866EE308d68384f856c5A3cf0',
    [eBscNetwork.test]: '0xe60F698D4D124D1866EE308d68384f856c5A3cf0',
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eBscNetwork.main]: '0xe60F698D4D124D1866EE308d68384f856c5A3cf0',
    [eBscNetwork.test]: '0xe60F698D4D124D1866EE308d68384f856c5A3cf0',
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  ProviderRegistryOwner: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  LendingRateOracle: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  LendingPoolCollateralManager: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  LendingPoolConfigurator: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  LendingPool: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  WethGateway: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  TokenDistributor: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  AaveOracle: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  FallbackOracle: {
    [eBscNetwork.main]: ZERO_ADDRESS,
    [eBscNetwork.test]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eBscNetwork.main]: {
      WBNB: '',
      DAI: '',
      USDC: '',
      USDT: '',
      AAVE: '',
      BUSD: '',
    },
    [eBscNetwork.test]: {
      WBNB: '',
      DAI: '',
      USDC: '',
      USDT: '',
      AAVE: '',
      BUSD: '',
    },
  },
  ReserveAssets: {
    [eBscNetwork.main]: {},
    [eBscNetwork.test]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  WETH: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  WrappedNativeToken: {
    [eBscNetwork.main]: '',
    [eBscNetwork.test]: '',
  },
  ReserveFactorTreasuryAddress: {
    [eBscNetwork.main]: '0xe60F698D4D124D1866EE308d68384f856c5A3cf0',
    [eBscNetwork.test]: '0xe60F698D4D124D1866EE308d68384f856c5A3cf0',
  },
  IncentivesController: {
    [eBscNetwork.main]: ZERO_ADDRESS,
    [eBscNetwork.test]: '0xa7Bcb3d64487DF542295bB9E06C045fcA83F8fF1',
  },
};
