import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata";
import TypingTest from "../components/TypingTest";

export default function TryTyping() {
  usePageMetadata({
    title: "Typing Playground | Serenity's Keys",
    description:
      "A quick typing test for parents and kids - measure WPM and Accuracy in 30 or 60 seconds.",
    openGraph: {
      title: "Typing Playground | Serenity's Keys",
      description: "Measure WPM and accuracy in 30–60 seconds.",
      image: `${import.meta.env.BASE_URL}og-image.png`,
      url: `https://geo222222.github.io/serenitys-keys-landing/`,
    },
  });

  return (
    <main id="main-content">
      <TypingTest durationOptions={[30, 60]} defaultDuration={30} />
    </main>
  );
}
