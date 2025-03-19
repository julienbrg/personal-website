'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  Flex,
  Button,
  Divider,
} from '@chakra-ui/react'
import { useTranslation } from '@/hooks/useTranslation'
import NextLink from 'next/link'

export default function Web3Page() {
  const t = useTranslation()

  return (
    <main>
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="lg" mb={6} color="blue.400">
              Le Web3
            </Heading>
            <Text mb={4}>
              Ce qu&apos;on appelle &quot;Web3&quot;, c&apos;est un ensemble de techniques qui
              visent à rendre le web plus vérifiable et plus sûr. Il est question de
              s&apos;émanciper progressivement des intermédiaires, de reprendre le contrôle sur nos
              données, sur notre identité et sur nos échanges en ligne que l&apos;on souhaite
              libres, directs et sécurisés.
            </Text>

            <Heading as="h2" size="lg" mb={6} mt={10} color="blue.400">
              La crypto
            </Heading>
            <Text mb={4}>
              Demander à quoi sert la crypto revient à demander à quoi sert l&apos;argent. Le
              Bitcoin (BTC) et l&apos;Ether (ETH) sont des monnaies complémentaires qui existent et
              qui s&apos;échangent très facilement contre de l&apos;Euro. L&apos;ETH est la monnaie
              native d&apos;Ethereum. Son modèle de création monétaire vaudrait la peine qu&apos;on
              s&apos;y intéresse un peu plus : toutes les 12 secondes une certaine quantité
              d&apos;ETH est créée pendant qu&apos;une quantité est détruite. On qualifie parfois
              l&apos;ETH de{' '}
              <ChakraLink href="https://ultrasound.money/" isExternal color="blue.400">
                ultra-sound money
              </ChakraLink>
              , c&apos;est-à-dire une monnaie &quot;ultra sonnante et trébuchante&quot;.
            </Text>
            <Text mb={4}>
              Considérer la crypto uniquement sous l&apos;angle de l&apos;investissement est une
              erreur. Il ne tient qu&apos;à nous de nous approprier ces techniques open source très
              accessibles. L&apos;argent est maintenant programmable, donc programmons-le !
              C&apos;est quelque chose de nouveau qu&apos;on ne pouvait pas faire avant. Les cryptos
              sont une alternative à notre système monétaire et financier mais pas seulement : elles
              permettent également de{' '}
              <strong>faire du vote de façon transparente et sécurisée</strong>, c&apos;est ce que
              fait{' '}
              <ChakraLink href="https://w3hc.github.io/gov-docs/" isExternal color="blue.400">
                Gov
              </ChakraLink>
              , un des projets sur lesquels je travaille.
            </Text>

            <Heading as="h2" size="lg" mb={6} mt={10} color="blue.400">
              La blockchain
            </Heading>
            <Text mb={4}>
              On n&apos;a pas spécialement besoin de comprendre comment fonctionne Internet pour
              l&apos;utiliser, eh bien la blockchain c&apos;est pareil ! En quelques mots, chaque
              bloc contient l&apos;empreinte numérique du bloc précédent pour former une chaîne : la
              blockchain. Ces blocs contiennent des transactions, par exemple &quot;Francis envoie
              10 euros à Alice&quot;. On ne peut pas modifier ou supprimer ces données. Elles sont
              toutes accessibles grâce à ce qu&apos;on appelle un <em>explorer</em>, comme par
              exemple{' '}
              <ChakraLink href="https://etherscan.io/" isExternal color="blue.400">
                Etherscan
              </ChakraLink>
              .
            </Text>
            <Text mb={4}>
              Ce livre de compte géant est maintenu par des validateurs qui ont mis en jeu une
              caution (<em>stake</em>) : s&apos;ils se comportent différemment de ce qui est défini
              par l&apos;algo de consensus, leur caution saute. À l&apos;inverse quand ils valident
              un bloc, ils touchent la récompense en ETH. N&apos;importe qui peut être validateur,
              il suffit d&apos;avoir un{' '}
              <ChakraLink href="https://dappnode.com/" isExternal color="blue.400">
                DappNode
              </ChakraLink>{' '}
              à la maison. Depuis le 1er mai 2024, on compte{' '}
              <ChakraLink href="https://beaconcha.in/charts/validators" isExternal color="blue.400">
                plus d&apos;un million de validateurs
              </ChakraLink>
              . À partir du mois de mai 2025, la caution passera de 32 à 1 ETH.
            </Text>
            <Text mb={4}>
              Ethereum permet de déployer ce qu&apos;on appelle des <em>smart contracts</em>. Ce
              sont simplement des programmes qui définissent la logique de telle ou telle appli. Les
              applis Web3 ont une partie <em>on-chain</em>, c&apos;est-à-dire une partie sur la
              blockchain sous la forme de smart contract, et une interface qui permet
              d&apos;interagir avec.
            </Text>

            <Heading as="h2" size="lg" mb={6} mt={10} color="blue.400">
              Un wallet
            </Heading>
            <Text mb={4}>
              Pour utiliser une appli Web3 ou pour simplement accepter la crypto comme moyen de
              paiement, vous pouvez installer ce qu&apos;on appelle un <em>wallet</em>. Le plus
              populaire reste{' '}
              <ChakraLink href="https://metamask.io/" isExternal color="blue.400">
                MetaMask
              </ChakraLink>{' '}
              mais il existe plus de 500 wallets différents. Une fois que vous l&apos;avez sécurisé,
              vous pouvez partager votre adresse Ethereum un peu de la même façon qu&apos;on partage
              une adresse email : les gens peuvent maintenant vous envoyer de l&apos;argent sans
              demander l&apos;autorisation ni à la banque, ni à VISA, ni à personne d&apos;autre.
            </Text>

            <Heading as="h2" size="lg" mb={6} mt={10} color="blue.400">
              Accepter la crypto
            </Heading>
            <Text mb={4}>
              La première façon de se procurer de la crypto c&apos;est de{' '}
              <strong>l&apos;accepter dans ses échanges</strong>. Pour accepter les dons en crypto
              en tant qu&apos;association par exemple, vous pouvez (1) demander au trésorier de
              créer et sécuriser une adresse Ethereum (en utilisant{' '}
              <ChakraLink href="https://metamask.io/" isExternal color="blue.400">
                MetaMask
              </ChakraLink>{' '}
              par exemple), et (2) publier cette adresse sur votre site internet ou compte officiel
              de réseau sociaux pour que les éventuels donateurs puissent vérifier qu&apos;il
              s&apos;agit bien de votre adresse.
            </Text>
            <Text mb={4}>
              Vous pouvez ensuite convertir ces dons en euros ou bien les convertir en{' '}
              <em>stablecoins</em>, par exemple en{' '}
              <ChakraLink href="https://makerdao.com/" isExternal color="blue.400">
                DAI
              </ChakraLink>{' '}
              dont une unité vaut un dollar. Il existe aussi plusieurs euros <em>on-chain</em>.{' '}
              <ChakraLink href="https://app.uniswap.org/swap" isExternal color="blue.400">
                Uniswap
              </ChakraLink>{' '}
              est un <em>exchange décentralisé</em> qui permet de passer d&apos;une monnaie à
              l&apos;autre sans passer par aucun intermédiaire.
            </Text>

            <Divider my={10} borderColor="gray.600" />

            <Text mb={4}>
              N&apos;hésitez pas à me contacter directement via{' '}
              <ChakraLink
                href="https://matrix.to/#/@julienbrg:matrix.org"
                isExternal
                color="blue.400"
              >
                Element
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://warpcast.com/julien-" isExternal color="blue.400">
                Farcaster
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://t.me/julienbrg" isExternal color="blue.400">
                Telegram
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://twitter.com/julienbrg" isExternal color="blue.400">
                Twitter
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://discordapp.com/users/julienbrg" isExternal color="blue.400">
                Discord
              </ChakraLink>
              , ou{' '}
              <ChakraLink
                href="https://www.linkedin.com/in/julienberanger/"
                isExternal
                color="blue.400"
              >
                LinkedIn
              </ChakraLink>
              .
            </Text>
          </Box>
        </VStack>
      </Container>
    </main>
  )
}
