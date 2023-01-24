import {
  mainnet as _mainnetAddresses,
  staging as stagingAddresses,
} from '@hop-protocol/core/addresses'
import { mainnet as _mainnetNetworks } from '@hop-protocol/core/networks'
import { HopAddresses, Networks } from './interfaces'

const isStaging = process.env.REACT_APP_NETWORK === 'staging'
const _addresses = isStaging ? stagingAddresses : _mainnetAddresses

export const mainnetAddresses: HopAddresses = {
  governance: {
    l1Hop: '',
    stakingRewardsFactory: '',
    stakingRewards: '',
    governorAlpha: '',
  },
  tokens: _addresses.bridges,
  bonders: _addresses.bonders,
}

const _networks = _mainnetNetworks as any

export const mainnetNetworks: Networks = {
  ethereum: {
    networkId: _networks.ethereum.networkId,
    rpcUrl: _networks.ethereum.publicRpcUrl,
    fallbackRpcUrls: _networks.ethereum.fallbackPublicRpcUrls,
    explorerUrl: _networks.ethereum.explorerUrls[0],
    waitConfirmations: _networks.ethereum.waitConfirmations,
  },
  polygon: {
    networkId: _networks.polygon.networkId,
    rpcUrl: _networks.polygon.publicRpcUrl,
    fallbackRpcUrls: _networks.polygon.fallbackPublicRpcUrls,
    explorerUrl: _networks.polygon.explorerUrls[0],
    nativeBridgeUrl: _networks.polygon.nativeBridgeUrl,
    waitConfirmations: _networks.polygon.waitConfirmations,
  },
  arbitrum: {
    networkId: _networks.arbitrum.networkId,
    rpcUrl: _networks.arbitrum.publicRpcUrl,
    fallbackRpcUrls: _networks.arbitrum.fallbackPublicRpcUrls,
    explorerUrl: _networks.arbitrum.explorerUrls[0],
    nativeBridgeUrl: _networks.arbitrum.nativeBridgeUrl,
    waitConfirmations: _networks.arbitrum.waitConfirmations,
  },
  optimism: {
    networkId: _networks.optimism.networkId,
    rpcUrl: _networks.optimism.publicRpcUrl,
    fallbackRpcUrls: _networks.optimism.fallbackPublicRpcUrls,
    explorerUrl: _networks.optimism.explorerUrls[0],
    nativeBridgeUrl: _networks.optimism.nativeBridgeUrl,
    waitConfirmations: _networks.optimism.waitConfirmations,
  },
  gnosis: {
    networkId: _networks.gnosis.networkId,
    rpcUrl: _networks.gnosis.publicRpcUrl,
    fallbackRpcUrls: _networks.gnosis.fallbackPublicRpcUrls,
    explorerUrl: _networks.gnosis.explorerUrls[0],
    nativeBridgeUrl: _networks.gnosis.nativeBridgeUrl,
    waitConfirmations: _networks.gnosis.waitConfirmations,
  },
  nova: {
    networkId: _networks.nova.networkId,
    rpcUrl: _networks.nova.publicRpcUrl,
    fallbackRpcUrls: _networks.nova.fallbackPublicRpcUrls,
    explorerUrl: _networks.nova.explorerUrls[0],
    nativeBridgeUrl: _networks.nova.nativeBridgeUrl,
    waitConfirmations: _networks.nova.waitConfirmations,
  },
}
