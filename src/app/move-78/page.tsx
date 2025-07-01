'use client'

import { Container, VStack, Heading, Text, Box, Button, Center, Icon, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaBookOpen, FaClock, FaArrowLeft } from 'react-icons/fa'
import { MdAutoAwesome } from 'react-icons/md'

export default function Move78Page() {
  return (
    <main>
      <Container maxW="container.md" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Bouton retour */}
          <Box>
            <Button
              as={NextLink}
              href="/ia"
              variant="ghost"
              leftIcon={<FaArrowLeft />}
              color="gray.400"
              _hover={{
                color: '#45a2f8',
                bg: 'rgba(69, 162, 248, 0.1)',
              }}
            >
              Retour
            </Button>
          </Box>

          {/* En-tête avec animation */}
          <Center>
            <VStack spacing={8} textAlign="center">
              <Heading
                as="h1"
                size="2xl"
                color="#45a2f8"
                textAlign="center"
                animation="fadeIn 2s ease-in"
                sx={{
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                Le coup 78
              </Heading>
            </VStack>
          </Center>

          {/* Section principale avec le contenu de l'article */}
          <Box
            bg="gray.900"
            p={12}
            borderRadius="2xl"
            border="2px solid"
            borderColor="gray.700"
            position="relative"
            overflow="hidden"
          >
            {/* Effet de brillance subtil */}
            <Box
              position="absolute"
              top="-50%"
              left="-50%"
              width="200%"
              height="200%"
              background="linear-gradient(45deg, transparent 30%, rgba(69, 162, 248, 0.1) 50%, transparent 70%)"
              animation="shine 6s ease-in-out infinite"
              sx={{
                '@keyframes shine': {
                  '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
                  '50%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
                  '100%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
                },
              }}
            />

            <VStack spacing={8} position="relative" zIndex={1} align="stretch">
              <VStack spacing={6} align="stretch" textAlign="left">
                <Text fontSize="md" color="gray.200" lineHeight="tall">
                  Le 13 mars 2016 à 15h19, heure de Séoul, Lee Sedol joue le coup 78 dans la 4ème
                  partie qui l&apos;oppose à AlphaGo. C&apos;est la dernière partie de Go qu&apos;un
                  humain a gagné contre la machine. Le coup 78 a fait dérailler l&apos;algorithme
                  mis au point par l&apos;équipe de Deep Mind menée par Demis Hassabis et David
                  Silver. Les deux chercheurs ont travaillé sur le sujet depuis vingt ans avant de
                  voir leur bébé perdre face à la combativité, l&apos;expérience et la créativité de
                  Lee Sedol, 9ème dan professionnel au jeu de Go.
                </Text>

                <Text fontSize="md" color="gray.200" lineHeight="tall">
                  Le lendemain, AlphaGo gagne la cinquième et dernière partie qui valide pour la
                  première fois la supériorité de la machine sur l&apos;Homme au jeu de Go. Quatre
                  parties sur cinq ont été gagnées par ce bout de code expérimental. Mais la
                  quatrième partie suffit à Lee Sedol et à nous toutes et tous. Le meilleur joueur
                  du monde a déclaré :
                </Text>

                <Box
                  bg="gray.800"
                  p={6}
                  borderRadius="lg"
                  borderLeft="4px solid"
                  borderLeftColor="#45a2f8"
                  my={6}
                >
                  <Text fontSize="md" color="gray.100" lineHeight="tall" fontStyle="italic">
                    &quot;J&apos;ai entendu des gens crier de joie quand il est devenu clair
                    qu&apos;AlphaGo avait perdu la partie. Je pense que la raison est évidente. Les
                    gens ressentaient de l&apos;impuissance et de la peur. Il semblait que nous,
                    humains, sommes si faibles et fragiles. Et cette victoire signifiait que nous
                    pouvions encore tenir bon. Au fil du temps, il sera probablement très difficile
                    de battre l&apos;IA. Mais gagner cette fois-ci, j&apos;ai senti que c&apos;était
                    suffisant. Une fois était suffisante.&quot;
                  </Text>
                  <Text fontSize="sm" color="#45a2f8" mt={4} textAlign="right">
                    — Lee Sedol, 9ème dan professionnel
                  </Text>
                </Box>

                <Text fontSize="md" color="gray.200" lineHeight="tall" fontWeight="medium">
                  Plus personne ne réussit jamais à battre une IA au jeu de Go.
                </Text>

                <Center mt={8}>
                  <Text fontSize="xl" color="#8c1c84" fontWeight="bold" fontStyle="italic">
                    À suivre...
                  </Text>
                </Center>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </main>
  )
}
