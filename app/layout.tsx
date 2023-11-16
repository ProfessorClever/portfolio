import "@mantine/core/styles.css";

import {
  MantineProvider,
  ColorSchemeScript,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import MyAppShell from "@/components/AppShell";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

const myColor: MantineColorsTuple = [
  "#faedff",
  "#edd9f7",
  "#d8b1ea",
  "#c286dd",
  "#ae62d2",
  "#a24bcb",
  "#9e3fc9",
  "#8931b2",
  "#7b2aa0",
  "#6b218d",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MyAppShell>{children}</MyAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
