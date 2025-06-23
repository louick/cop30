import React from "react";
import { Modal, List, Text, Title, rem, Group, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const COP_COLOR = "#05657d";
const ACCENT = "#fba304";

export function FeatureModal({ opened, onClose, title, features }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Title
          order={3}
          style={{
            color: COP_COLOR,
            fontWeight: 800,
            fontSize: rem(22),
            letterSpacing: "-.5px",
            textAlign: "left",
            marginBottom: rem(10),
          }}
        >
          {title}
        </Title>
      }
      centered
      size="lg"
      overlayProps={{
        backgroundOpacity: 0.18,
        blur: 2,
      }}
      radius="lg"
      padding="lg"
      styles={{
        modal: {
          borderRadius: rem(18),
          boxShadow: `0 4px 32px 0 ${COP_COLOR}24`,
          background: "#fff",
          padding: rem(30),
        },
        header: {
          borderBottom: `1px solid ${COP_COLOR}16`,
          marginBottom: rem(16),
          paddingBottom: rem(10),
        },
      }}
    >
      <List
        spacing="lg"
        size="sm"
        icon={
          <ThemeIcon
            size={24}
            radius="xl"
            variant="light"
            style={{
              backgroundColor: `${ACCENT}20`,
              color: COP_COLOR,
              border: `1.5px solid ${ACCENT}`,
              boxShadow: "0 2px 6px 0 #05657d09",
            }}
          >
            <IconCheck size={16} stroke={2.2} />
          </ThemeIcon>
        }
        style={{ marginTop: rem(8) }}
      >
        {features.map((f, i) => (
          <List.Item key={i}>
            <Group align="flex-start" gap={8}>
              <Text
                fw={700}
                style={{
                  color: COP_COLOR,
                  fontSize: rem(15.5),
                  marginBottom: rem(3),
                  letterSpacing: "-.2px",
                  lineHeight: 1.1,
                }}
              >
                {f.title}
              </Text>
            </Group>
            <Text
              size="sm"
              style={{
                marginBottom: rem(10),
                marginTop: rem(2),
                color: "#353535",
                lineHeight: 1.45,
              }}
            >
              {f.desc}
            </Text>
          </List.Item>
        ))}
      </List>
    </Modal>
  );
}
