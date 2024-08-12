"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const [authorName, setAuthorName] = useState("");
  const [email, setEmail] = useState("");
  const [prompt, setPrompt] = useState("");
  const [tag, setTag] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/v1/prompt", {
        authorName: authorName,
        email: email,
        prompt: prompt,
        tag: tag,
      });
      if (response.status === 201) {
        setAuthorName("");
        setEmail("");
        setPrompt("");
        setTag("");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 md:max-w-[800px]"
    >
      <Label>Author Name</Label>
      <Input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        required
      />
      <Label>Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Label>Prompt</Label>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
      />
      <Label>#Tag</Label>
      <Input
        type="text"
        placeholder="#coding"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        required
      />
      <div className="flex gap-3 mt-3">
        <Button type="submit">Create</Button>
        <Link href="/">
          <Button type="button" variant="outline">
            Cancle
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default CreateForm;
