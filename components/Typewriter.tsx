"use client";

import { useEffect, useState } from "react";

interface Props {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function Typewriter({ words, className, typeSpeed = 120, deleteSpeed = 50, pause = 1800 }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we only run on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || words.length === 0) return;

    const word = words[index];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) {
      delay = pause;
    } else if (deleting && text === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, isClient]);

  // Show first word during SSR and initial render
  if (!isClient) {
    return (
      <span className={className} aria-live="polite" aria-label={words[0]}>
        {words[0]}
      </span>
    );
  }

  return (
    <span className={className} aria-live="polite" aria-label={words[index]}>
      {text || '\u00A0'}
    </span>
  );
}
