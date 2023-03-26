import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Container, VStack, Heading, Text, HStack, Image, Button } from "@chakra-ui/react";
import { FC } from "react";

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={20}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center">
              Welcome, Buildoor,
          </Heading>
          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each buildoor is randomly generated and can be staked to receive
            <Text as="b"> $BLD</Text> Use your <Text as="b"> $BLD</Text> to
            upgrade your buildoor and receive perks within the community!
          </Text>
        </VStack>
      </Container>
      <HStack spacing={10}>
        <Image src="/avatar1.png" alt="buildoor" />
        <Image src="/avatar2.png" alt="buildoor" />
        <Image src="/avatar3.png" alt="buildoor" />
        <Image src="/avatar4.png" alt="buildoor" />
        <Image src="/avatar5.png" alt="buildoor" />
      </HStack>
      <Button bgColor="accent" color="white" maxW="300px">
        <HStack>
          <Text>mint your buildoor</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected;