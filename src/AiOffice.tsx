import {
  Box,
  Button,
  createListCollection,
  Flex,
  Portal,
  Select,
  Span,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Email } from "./models/email";
import { Input } from "@chakra-ui/react";
import { Recipient } from "./models/recipient";

export default function AIOffice() {
  const [log, setLog] = useState<Email[]>([
    {
      from: "alin@huna2.com",
      to: ["alex@huna2.com"],
      subject: "Hi there",
      body: "adsasd asd asd asd asdas sd dasd ",
      sentDate: new Date(),
      bcc: ["calvin@huna2.com", "dorian@huna2.com"],
      cc: ["brad@huna2.com"],
    },
  ]);

  const [inbox, setInbox] = useState<Email[]>([
    {
      from: "alin@huna2.com",
      to: ["alex@huna2.com"],
      subject: "Hi there",
      body: "adsasd asd asd asd asdas sd dasd ",
      sentDate: new Date(),
      bcc: ["calvin@huna2.com", "dorian@huna2.com"],
      cc: ["brad@huna2.com"],
    },
  ]);

  const [allEmails, setAllEmails] = useState<Recipient[]>([
    {
      name: "Alin",
      email: "alin@huna2.com",
    },
  ]);

  const allEmailsListCollection = useMemo(() => {
    return createListCollection({
      items: allEmails.map((x) => ({ label: x.name, value: x.email })),
    });
  }, [allEmails]);

  const [email, setEmail] = useState<Email>({
    from: "alin@huna2.com",
    sentDate: new Date(),
    subject: "",
    bcc: [],
    body: "",
    cc: [],
    to: [],
  });

  return (
    <Flex
      direction="column"
      p={4}
      height="100%" // Allow it to fill the available space within the Outlet
      overflow="auto" // Enable scrolling on the container level
    >
      {/* Top Section: Flex vertically split */}
      <Flex
        direction={{ base: "column", lg: "row" }} // Stack vertically on mobile (base) and horizontally on larger screens (lg)
        flex={{ base: "none", lg: "1" }}
        overflow="hidden" // Prevent overflowing content outside the flex
      >
        {/* Left Flex Section (top left) */}
        <Box
          flex={{ base: "none", lg: "1" }}
          overflowY="auto" // Enable vertical scrollbar on the left section (for large screens)
        >
          <Text textStyle="lg">Email Log</Text>
          {/* Add content for the left side */}
          <Box p={4}>
            <Accordion.Root collapsible>
              {log.map((item, index) => (
                <Accordion.Item key={index} value={index + ""}>
                  <Accordion.ItemTrigger>
                    <Box flex="1">
                      <Span fontWeight="bold" flex="1">
                        {item.subject}
                      </Span>
                      <Box
                        gap={4}
                        flex="1"
                        display={"flex"}
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                      >
                        <Box textStyle="xs" flex="1">
                          From: {item.from}
                        </Box>
                        <Box textStyle="xs" flex="1">
                          To: {item.to?.join("; ")}
                        </Box>
                        <Box textStyle="xs" flex="1">
                          CC: {item.cc?.join("; ")}
                        </Box>
                        <Box textStyle="xs" flex="1">
                          BCC: {item.bcc?.join("; ")}
                        </Box>
                      </Box>
                    </Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.body}</Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        </Box>

        {/* Right Fixed Section (top right) */}
        <Box
          width={{ base: "100%", lg: "40%" }}
          overflowY="auto" // Enable vertical scrollbar on the right section (for large screens)
        >
          <Text textStyle="lg">My Inbox</Text>
          {/* Add content for the right side */}
          <Box p={4}>
            <Accordion.Root collapsible>
              {inbox.map((item, index) => (
                <Accordion.Item key={index} value={index + ""}>
                  <Accordion.ItemTrigger>
                    <Box flex="1">
                      <Span fontWeight="bold" flex="1">
                        {item.subject}
                      </Span>
                      <Box
                        gap={4}
                        display={"flex"}
                        flexDirection={"row"}
                        flex="1"
                        flexWrap={"wrap"}
                      >
                        <Box textStyle="xs" flex="1">
                          From: {item.from}
                        </Box>
                        <Box textStyle="xs" flex="1">
                          To: {item.to?.join("; ")}
                        </Box>
                        <Box textStyle="xs" flex="1">
                          CC: {item.cc?.join("; ")}
                        </Box>
                        <Box textStyle="xs" flex="1">
                          BCC: {item.bcc?.join("; ")}
                        </Box>
                      </Box>
                    </Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.body}</Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        </Box>
      </Flex>

      {/* Bottom Section: Fixed */}
      <Box display="flex" flexDirection={"column"}>
        <Text textStyle="lg">Send Email</Text>
        <Box display={"flex"} flexDirection={"row"} flex="1">
          <Box p={4} display={"flex"} flexDirection={"column"} gap={4}>
            <Input
              value={email.subject}
              onChange={(e) =>
                setEmail((s) => ({ ...s, subject: e.target.value }))
              }
              placeholder="Subject"
            />

            <Select.Root
              multiple
              collection={allEmailsListCollection}
              size="sm"
              value={email.to}
              onValueChange={e => setEmail(s => ({...s, to: e.value}))}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="To" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {allEmails.map((recipient) => (
                      <Select.Item item={recipient.email} key={recipient.email}>
                        {recipient.name}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>

            <Select.Root
              multiple
              collection={allEmailsListCollection}
              size="sm"
              value={email.cc}
              onValueChange={e => setEmail(s => ({...s, cc: e.value}))}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="CC" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {allEmails.map((recipient) => (
                      <Select.Item item={recipient.email} key={recipient.email}>
                        {recipient.name}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>

            <Select.Root
              multiple
              collection={allEmailsListCollection}
              size="sm"
              value={email.bcc}
              onValueChange={e => setEmail(s => ({...s, bcc: e.value}))}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="BCC" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {allEmails.map((recipient) => (
                      <Select.Item item={recipient.email} key={recipient.email}>
                        {recipient.name}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Box>
          <Box p={4} flex="1" display={"flex"} flexDir={"column"}>
            <Textarea flex="1" value={email.body} onChange={e => setEmail(s => ({...s, body: e.target.value}))} autoresize placeholder="Body" />
          </Box>
          <Box p={4} display="flex" flexDir={"column"} justifyContent={"center"}>
            <Button width="100%" flex="1">Send</Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
