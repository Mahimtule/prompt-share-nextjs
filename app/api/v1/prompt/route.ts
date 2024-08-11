import { connectDB } from "@/utils/database";
import { Prompt } from "@/models/prompt";

export const GET = async (request: Request) => {
  try {
    await connectDB();
    const prompts = await Prompt.find();
    return new Response(JSON.stringify({ Prompts: prompts }));
  } catch (error) {
    console.log("Error fetching all Prompt: ", error);
    return new Response("Error fetching all Prompts", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    await connectDB();
    const { authorName, email, prompt, tag } = await request.json();
    if (!authorName || !email || !prompt || !tag)
      return new Response("Some fields are missing", { status: 400 });

    const newPrompt = await Prompt.create({
      authorName: authorName,
      email: email,
      prompt: prompt,
      tag: tag,
    });

    return new Response(
      JSON.stringify({ Message: "Prompt Created.", newPrompt: newPrompt })
    );
  } catch (error) {
    console.log("Error creating Prompt: ", error);
    return new Response("Error Creating Prompt", { status: 500 });
  }
};
