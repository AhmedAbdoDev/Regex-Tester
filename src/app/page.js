"use client";
import ControlsPanel from "@/components/ControlsPanel";
import ResultsPanel from "@/components/ResultsPanel";
import TextEditorPanel from "@/components/TextEditorPanel";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [regex, setRegex] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);
  const [flags, setFlags] = useState("g");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!regex) {
      setMatches([]);
      setError(null);
      return;
    }

    try {
      const regexObj = new RegExp(regex, flags);
      const foundMatches = [...text.matchAll(regexObj)];
      setMatches(foundMatches);
      setError(null);
    } catch (e) {
      setMatches([]);
      setError("Invalid regular expression syntax.");
    }
  }, [regex, text, flags]);

  const toggleFlag = (flag) => {
    setFlags((prevFlags) =>
      prevFlags.includes(flag) ? prevFlags.replace(flag, "") : prevFlags + flag
    );
  };

  return (
    <div className="bg-gray-950 text-gray-200 p-4 sm:p-8 font-sans flex-1 content-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
        <span className="text-indigo-500">Regex</span> Tester
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 flex-1">
        <ControlsPanel
          regex={regex}
          setRegex={setRegex}
          flags={flags}
          toggleFlag={toggleFlag}
        />
        <TextEditorPanel text={text} setText={setText} />
        <ResultsPanel regex={regex} matches={matches} error={error} />
      </div>
    </div>
  );
}
