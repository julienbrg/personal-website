'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import {
  optimism,
  zksync,
  base,
  arbitrum,
  gnosis,
  polygon,
  polygonZkEvm,
  mantle,
  celo,
  avalanche,
  degen,
  sepolia,
  optimismSepolia,
  arbitrumSepolia,
  baseSepolia,
} from '@reown/appkit/networks'
import { type ReactNode, memo } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const projectId = process.env['NEXT_PUBLIC_PROJECT_ID']
if (!projectId) {
  throw new Error('NEXT_PUBLIC_PROJECT_ID is not set')
}

const ethersAdapter = new EthersAdapter()

createAppKit({
  adapters: [ethersAdapter],
  projectId,
  networks: [
    optimism,
    zksync,
    base,
    arbitrum,
    gnosis,
    polygon,
    polygonZkEvm,
    mantle,
    celo,
    avalanche,
    degen,
    sepolia,
    optimismSepolia,
    arbitrumSepolia,
    baseSepolia,
  ],
  defaultNetwork: sepolia,
  metadata: {
    name: 'Julien Béranger',
    description: 'Julien Béranger - Building Web3 since 2013.',
    url: 'https://julienberanger.com',
    icons: ['./favicon.ico'],
  },
  enableEIP6963: true,
  enableCoinbase: true,
})

// Custom colors for consistent branding
const colors = {
  brand: {
    purple: '#8c1c84',
    purpleDark: '#6d1566', // Darker version for hover states
    blue: '#45a2f8',
    blueDark: '#2589e6', // Darker version for hover states
  },
  blue: {
    400: '#45a2f8',
    500: '#2589e6',
  },
  purple: {
    400: '#8c1c84',
    500: '#6d1566',
  },
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors,
  styles: {
    global: {
      body: {
        bg: '#000000',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: colors.brand.blue,
          color: 'white',
          _hover: {
            bg: colors.brand.blueDark,
          },
        },
        outline: {
          borderColor: colors.brand.blue,
          color: colors.brand.blue,
          _hover: {
            bg: 'rgba(69, 162, 248, 0.1)',
          },
        },
        purple: {
          bg: colors.brand.purple,
          color: 'white',
          _hover: {
            bg: colors.brand.purpleDark,
          },
        },
        purpleOutline: {
          borderColor: colors.brand.purple,
          color: colors.brand.purple,
          _hover: {
            bg: 'rgba(140, 28, 132, 0.1)',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: colors.brand.blue,
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

const ContextProvider = memo(function ContextProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
})

export default ContextProvider
