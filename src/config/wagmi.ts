import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { sepolia } from '@reown/appkit/networks'
import { cookieStorage, createStorage } from '@wagmi/core'
import { PROJECT_ID } from './env'

export const networks = [sepolia]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: false,
  projectId: PROJECT_ID,
  networks,
})

export const wagmiConfig = wagmiAdapter.wagmiConfig
