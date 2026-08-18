'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  Image,
  Center,
} from '@chakra-ui/react'
import { ListRoot, ListItem } from '@/components/ui/list'

export default function MeditationSouriantePage() {
  return (
    <main>
      <Container maxW="container.md" py={10}>
        <VStack gap={8} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading as="h1" size="xl" mb={4} color="#45a2f8">
              Méditation souriante
            </Heading>
          </Box>

          <Box>
            <Text mb={6} fontSize="lg" lineHeight="tall">
              La méditation permet de réduire le stress, qui lui-même cause toutes sortes de
              maladies et de problèmes. Comment s&apos;y prendre ?
            </Text>

            <Heading as="h2" size="lg" mb={4} mt={8} color="#8c1c84">
              Préparation
            </Heading>
            <ListRoot gap={3} mb={6}>
              <ListItem>
                <Text>
                  Choisissez un endroit calme, ça peut être à l&apos;intérieur ou à
                  l&apos;extérieur. Pas besoin d&apos;un silence absolu. Si il y a des bruits trop
                  forts qui pourraient vous gêner, optez pour les boules Quies.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  C&apos;est important d&apos;être assis confortablement, donc ça peut être dans un
                  fauteuil ou un canapé par exemple. Vous n&apos;hésitez pas ajouter un ou deux
                  coussins.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Évitez de commencer en étant trop fatigué ou après avoir mangé. D&apos;expérience
                  ça marche moins bien.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  N&apos;hésitez pas à vous étirer un coup, à boire une tasse de thé et à vous
                  moucher : on va respirer par le nez.
                </Text>
              </ListItem>
            </ListRoot>

            <Heading as="h2" size="lg" mb={4} mt={8} color="#8c1c84">
              Posture
            </Heading>
            <ListRoot gap={3} mb={6}>
              <ListItem>
                <Text>Asseyez-vous en tailleur, le dos droit, les épaules bien relâchées.</Text>
              </ListItem>
              <ListItem>
                <Text>
                  Placez vos mains l&apos;une sur l&apos;autre, les paumes vers le haut, au niveau
                  du bas-ventre. Vous pouvez aussi les placez sur vos genoux tout simplement.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Fermez les yeux sans forcer. Vous pouvez éventuellement orienter le regard vers le
                  haut à 45 degrés si vous voulez.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Vous pouvez sourire très légèrement, un petit peu à la manière de la Joconde. On
                  n&apos;est pas là pour faire la gueule ! À l&apos;écoute de vous-même et de ce qui
                  vous entoure, essayez de placer votre sourire juste un tout petit cran au dessus
                  du &quot;non-sourire&quot;, juste histoire d&apos;amorcer un peu d&apos;optimisme.
                </Text>
              </ListItem>
            </ListRoot>

            <Heading as="h2" size="lg" mb={4} mt={8} color="#8c1c84">
              Respiration
            </Heading>
            <ListRoot gap={3} mb={6}>
              <ListItem>
                <Text>Commencez par vous détendre et respirez par le nez de façon normale.</Text>
              </ListItem>
              <ListItem>
                <Text>Puis respirez, toujours par le nez, de façon régulière, ample et lente.</Text>
              </ListItem>
              <ListItem>
                <Text>
                  Vous pouvez <Text as="em">faire sonner</Text> votre respiration, sans non plus
                  ronfler, ça va vous aider à respirer de façon continue et régulière, et aussi à
                  vous concentrer sur votre respiration.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  En fin d&apos;inspiration ou d&apos;expiration, faites en sorte que la transition
                  soit fluide et souple.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Ne contractez pas les abdos, notamment en fin d&apos;expiration pour pour
                  faciliter la transition vers l&apos;inspiration.
                </Text>
              </ListItem>
              <ListItem>
                <Text>N&apos;hésitez pas à déglutir ou bailler quand c&apos;est nécessaire.</Text>
              </ListItem>
            </ListRoot>

            <Heading as="h2" size="lg" mb={4} mt={8} color="#8c1c84">
              Pensées
            </Heading>
            <ListRoot gap={3} mb={6}>
              <ListItem>
                <Text>
                  Votre esprit aura tendance à être envahi de{' '}
                  <Text as="em">pensées bordéliques</Text> et c&apos;est tout à fait normal.
                  L&apos;idée c&apos;est de revenir sur votre respiration.
                </Text>
              </ListItem>
              <ListItem>
                <Text mb={2}>
                  Essayez de <Text as="strong">toujours REVENIR à votre posture de départ</Text> :
                </Text>
                <ListRoot gap={1} ml={6}>
                  <ListItem>
                    <Text fontSize="sm">Concentrée sur votre respiration</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm">Le dos droit</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm">Les épaules relâchées</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm">Tout le corps détendu</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm">Ce très léger sourire au lèvre</Text>
                  </ListItem>
                </ListRoot>
              </ListItem>
              <ListItem>
                <Text>
                  À chaque fois que vos pensées s&apos;emballent (factures, boulot, gamins, soucis,
                  etc), reconcentrez-vous sur votre respiration. Ça n&apos;a rien d&apos;évident et
                  c&apos;est probablement le plus important.
                </Text>
              </ListItem>
            </ListRoot>

            <Text mb={6} fontSize="lg" fontWeight="medium" color="#45a2f8">
              Plus vous pratiquerez, plus ça sera facile pour vous. C&apos;est à peu près tout ce
              qu&apos;il faut savoir pour méditer. 🎉
            </Text>

            <Text mb={8} lineHeight="tall">
              Pratiquée de façon régulière, même 10 minutes par jour, la méditation est
              aujourd&apos;hui reconnue pour ses bienfaits à tous les niveaux.{' '}
              <ChakraLink
                href="https://www.youtube.com/watch?v=1IRAM-enJNg"
                target="_blank"
                rel="noopener noreferrer"
                color="#45a2f8"
              >
                Ce documentaire
              </ChakraLink>{' '}
              de Benoît Laborde explique bien ce qu&apos;on sait aujourd&apos;hui sur la méditation.
              Dans{' '}
              <ChakraLink
                href="https://www.youtube.com/watch?v=aKLxPDMtfr8"
                target="_blank"
                rel="noopener noreferrer"
                color="#45a2f8"
              >
                cette conférence
              </ChakraLink>
              , Matthieu Ricard partage sa riche expérience de la méditation. Vous pouvez y piquer
              quelques astuces.
            </Text>

            <Heading as="h2" size="lg" mb={6} mt={10} color="#8c1c84">
              Bonus
            </Heading>

            <Center mb={6}>
              <Image
                src="/huiyan-dashi.png"
                alt="Master Hui Yan"
                borderRadius="lg"
                w="100%"
                h="auto"
              />
            </Center>

            <Text mb={4} lineHeight="tall">
              Master Hui Yan est un des personnage du film{' '}
              <ChakraLink
                href="https://fr.wikipedia.org/wiki/A_Touch_of_Zen"
                target="_blank"
                rel="noopener noreferrer"
                color="#45a2f8"
              >
                A Touch of Zen
              </ChakraLink>
              , un film de King Hu sorti en 1971. Dans{' '}
              <ChakraLink
                href="https://www.youtube.com/watch?v=0AHz2B-_sLQ"
                target="_blank"
                rel="noopener noreferrer"
                color="#45a2f8"
              >
                cet extrait
              </ChakraLink>
              , on peut voir Master Hui Yan et ses disciples courrir sur la cime des bambous.
            </Text>

            <Text mb={4} lineHeight="tall">
              Dans la culture chinoise, les Immortels sont traditionnellement habillés en blanc et
              peuvent voler. Beaucoup de personnages de films chinois s&apos;entraînent tellement
              qu&apos;ils s&apos;approchent des Immortels taoïstes : c&apos;est pour ça qu&apos;on
              peut les voir sautiller de façon si légères dans les arbres ou sur les toits. Mais
              tous ne sont pas aussi forts que Master Hui Yan... 😉
            </Text>

            <Text mb={4} lineHeight="tall">
              Bonne médit&apos; !
            </Text>
            <Center mb={50} mt={50}>
              <Image
                src="/immortal.png"
                alt="Immortel taoïste"
                borderRadius="lg"
                maxW="300px"
                w="80%"
                h="auto"
              />
            </Center>
          </Box>
        </VStack>
      </Container>
    </main>
  )
}
