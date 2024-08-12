"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import PromptCard from "./utils/PromptCard";

interface PromptProps {
  authorName: string;
  email: string;
  createdAt: Date;
  prompt: string;
  tag: string;
}

const Content = () => {
  const [prompts, setPrompts] = useState<PromptProps[]>([]);
  useEffect(() => {
    const fetchAllPrompts = async () => {
      const response = await axios.get("/api/v1/prompt");
      setPrompts(response.data.prompts);
    };
    fetchAllPrompts();
  }, []);
  return (
    <div className=" p-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {prompts.length > 0 ? (
        prompts.map((prompt) => (
          <PromptCard
            authorName={prompt.authorName}
            email={prompt.email}
            createdAt={prompt.createdAt}
            prompt={prompt.prompt}
            tag={prompt.tag}
          />
        ))
      ) : (
        <p className="text-lg font-medium">No prompts Found!</p>
      )}
    </div>
  );
};

export default Content;
