import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NavBar from "@/components/ui/NavBar";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const CreatePage = () => {
  return (
    <section>
      <NavBar />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">Create Prompt</h1>
        <form className="w-full flex flex-col gap-3 md:max-w-[800px]">
          <Label>Author Name</Label>
          <Input type="text" required />
          <Label>Email</Label>
          <Input type="email" required />
          <Label>Prompt</Label>
          <Textarea required />
          <Label>#Tag</Label>
          <Input type="text" placeholder="#coding" required />
          <div className="flex gap-3 mt-3">
            <Button type="submit">Create</Button>
            <Link href="/">
              <Button type="button" variant="outline">Cancle</Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePage;
