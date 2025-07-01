'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Button,
  Link as ChakraLink,
  Icon,
  Flex,
  Badge,
  Divider,
  Center,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaGraduationCap, FaRobot, FaUsers, FaCode, FaBookOpen, FaBrain } from 'react-icons/fa'
import { MdSchool, MdComputer, MdChat, MdTrendingUp } from 'react-icons/md'

// Services destinés aux enseignants (mis en avant)
const teacherServices = [
  {
    title: 'Formation IA pour Enseignants',
    description:
      "Formation complète sur l'utilisation pédagogique de l'IA : Mistral, Claude, outils de création de contenu et d'évaluation.",
    icon: FaGraduationCap,
    features: ['Ateliers pratiques', "Cas d'usage concrets", 'Suivi personnalisé'],
    duration: '1-3 jours',
  },
  {
    title: 'Intégration IA dans les Cours',
    description:
      "Accompagnement pour intégrer l'IA dans vos cours : création d'exercices, assistant pédagogique, correction automatisée.",
    icon: MdSchool,
    features: ['Outils sur mesure', 'Formation équipe', 'Support technique'],
    duration: 'Projet sur mesure',
  },
  {
    title: 'Assistant Pédagogique Personnalisé',
    description:
      "Développement d'un assistant IA spécialisé dans votre domaine d'enseignement avec vos propres contenus.",
    icon: FaBrain,
    features: ['RAG personnalisé', 'Interface dédiée', 'Maintenance incluse'],
    duration: '4-8 semaines',
  },
]

// Autres services IA
const generalServices = [
  {
    title: "Développement d'Applications IA",
    description:
      "Création d'applications sur mesure intégrant Claude API, OpenAI, ou modèles open source.",
    icon: FaCode,
    category: 'Développement',
  },
  {
    title: 'Systèmes RAG Avancés',
    description:
      "Mise en place de systèmes de recherche et génération augmentée pour vos documents d'entreprise.",
    icon: FaBookOpen,
    category: "IA d'entreprise",
  },
  {
    title: 'Formation Équipes Techniques',
    description: 'Formation de vos développeurs aux APIs IA, fine-tuning et meilleures pratiques.',
    icon: MdComputer,
    category: 'Formation',
  },
  {
    title: 'Audit et Stratégie IA',
    description:
      'Analyse de vos besoins et recommandations pour une stratégie IA adaptée à votre organisation.',
    icon: MdTrendingUp,
    category: 'Conseil',
  },
]

export default function IAPage() {
  return (
    <main>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={20} align="stretch">
          {/* En-tête */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={6} color="#45a2f8">
              Intelligence Artificielle
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="800px" mx="auto" mb={8}>
              Spécialiste IA avec expertise approfondie des APIs de Mistral et Claude. développement
              d&apos;outils comme{' '}
              <ChakraLink href="https://rukh.w3hc.org/" isExternal color="#45a2f8">
                Rukh API
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://v2.avventura.fun/" isExternal color="#45a2f8">
                Avventura
              </ChakraLink>{' '}
              ou{' '}
              <ChakraLink href="https://github.com/w3hc/zhankai" isExternal color="#45a2f8">
                Zhankai
              </ChakraLink>
              . Je peux vous former, vous expliquer les bonnes pratiques d&apos;utilisation de
              l&apos;IA, et vous guider dans l&apos;automatisation de tout ce qui peut l&apos;être.
            </Text>
          </Box>

          {/* Services pour enseignants - Section mise en avant */}
          <Box>
            <Flex align="center" justify="center" mb={8}>
              <Icon as={FaGraduationCap} boxSize={8} color="#8c1c84" mr={4} />
              <Heading as="h2" size="xl" color="#8c1c84">
                Services pour l&apos;Enseignement
              </Heading>
            </Flex>
            <Text textAlign="center" color="gray.300" mb={12} fontSize="lg">
              Formations et solutions IA spécialement conçues pour les enseignants et établissements
              scolaires
            </Text>

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} mb={16}>
              {teacherServices.map((service, index) => (
                <Box
                  key={index}
                  bg="gray.800"
                  p={10}
                  borderRadius="xl"
                  border="2px solid"
                  borderColor="#8c1c84"
                  position="relative"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(140, 28, 132, 0.3)',
                    borderColor: '#45a2f8',
                  }}
                  transition="all 0.3s ease"
                >
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    bg="#8c1c84"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                  >
                    ENSEIGNEMENT
                  </Badge>

                  <Icon as={service.icon} boxSize={14} color="#8c1c84" mb={6} />

                  <Heading as="h3" size="md" mb={6} color="white">
                    {service.title}
                  </Heading>

                  <Text color="gray.300" mb={8} lineHeight="tall">
                    {service.description}
                  </Text>

                  <VStack align="stretch" spacing={4} mb={8}>
                    {service.features.map((feature, idx) => (
                      <Text key={idx} fontSize="sm" color="gray.400">
                        ✓ {feature}
                      </Text>
                    ))}
                  </VStack>

                  <Box mt="auto">
                    <Text fontSize="sm" color="gray.500" mb={1}>
                      Durée
                    </Text>
                    <Text fontSize="sm" fontWeight="bold" color="#45a2f8">
                      {service.duration}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Divider borderColor="gray.600" />

          {/* Autres services IA */}
          <Box>
            <Heading as="h2" size="xl" textAlign="center" mb={12} color="white">
              Pour les entreprises et collectivités
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={16}>
              {generalServices.map((service, index) => (
                <Box
                  key={index}
                  bg="gray.800"
                  p={8}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor="gray.700"
                  _hover={{
                    transform: 'translateY(-4px)',
                    borderColor: '#45a2f8',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s ease"
                >
                  <Flex align="center" mb={6}>
                    <Icon as={service.icon} boxSize={10} color="#45a2f8" mr={6} />
                    <Box>
                      <Heading as="h3" size="md" color="white" mb={1}>
                        {service.title}
                      </Heading>
                      <Badge colorScheme="blue" variant="subtle" fontSize="xs">
                        {service.category}
                      </Badge>
                    </Box>
                  </Flex>

                  <Text color="gray.300" lineHeight="tall">
                    {service.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Section liens utiles */}
          <Box bg="gray.900" p={12} borderRadius="xl">
            <Heading as="h2" size="lg" textAlign="center" mb={12} color="white">
              Ressources
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Button
                as={NextLink}
                href="/chat"
                size="lg"
                variant="outline"
                borderColor="#45a2f8"
                color="#45a2f8"
                _hover={{
                  bg: 'rgba(69, 162, 248, 0.1)',
                  transform: 'translateY(-2px)',
                }}
                leftIcon={<MdChat />}
                height="auto"
                py={4}
                px={6}
                flexDirection="column"
                textAlign="center"
              >
                <Text fontWeight="bold" mb={1}>
                  Assistant personnel
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Discutez avec Francesca, ma fidèle assistante !
                </Text>
              </Button>

              <Button
                as={NextLink}
                href="/move-78"
                size="lg"
                variant="outline"
                borderColor="#8c1c84"
                color="#8c1c84"
                _hover={{
                  bg: 'rgba(140, 28, 132, 0.1)',
                  transform: 'translateY(-2px)',
                }}
                leftIcon={<FaBookOpen />}
                height="auto"
                py={4}
                px={6}
                flexDirection="column"
                textAlign="center"
              >
                <Text fontWeight="bold" mb={1}>
                  Le coup 78
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Le 13 mars 2016 à 15h19, heure de Séoul, Lee Sedol joue le coup 78...
                </Text>
              </Button>
            </SimpleGrid>
          </Box>

          {/* Call to action */}
          <Center>
            <VStack spacing={6} textAlign="center">
              <Text fontSize="lg" color="gray.300" maxW="600px">
                Prêt à intégrer l&apos;IA dans votre enseignement ou votre entreprise ?
                Contactons-nous pour discuter de vos besoins spécifiques.
              </Text>
              <Button
                as={NextLink}
                href="/contact"
                size="lg"
                bg="#8c1c84"
                color="white"
                _hover={{
                  bg: '#6d1566',
                  transform: 'translateY(-2px)',
                }}
                px={8}
              >
                Demander un devis gratuit
              </Button>
            </VStack>
          </Center>
        </VStack>
      </Container>
    </main>
  )
}
