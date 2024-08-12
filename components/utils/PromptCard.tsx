import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";

interface CardProps {
  authorName: string;
  createdAt: Date;
  email: string;
  prompt: string;
  tag: string;
}

const PromptCard = ({ authorName, createdAt, email, prompt, tag }:CardProps) => {
  return (
    <div className="p-5 border border-gray-400 rounded-lg">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>{authorName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1>{authorName}</h1>
            <p className="text-sm text-muted-foreground">
              {email}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground underline">{new Date(createdAt).toLocaleDateString()}</p>
      </div>
      <p className="mt-2 text-justify text-sm">
        {prompt}
      </p>
      <Badge className="mt-2">{tag}</Badge>
    </div>
  );
};

export default PromptCard;
