import { useState, useEffect, useCallback } from "react";

export const useTypewriter = (
  wantedText: string,
  onDone: () => void,
  interval = 150
) => {
  const [text, setText] = useState("");
  const _onDone = useCallback(onDone, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length === wantedText.length) {
        _onDone();
        return;
      }

      const newText = wantedText.substr(0, text.length + 1);
      setText(newText);
    }, interval);

    return () => clearTimeout(timeout);
  }, [text, wantedText, _onDone, interval]);

  return text;
};
