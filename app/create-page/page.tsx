import CreateForm from "@/components/CreateForm";

const CreatePage = () => {
  return (
    <section>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">Create Prompt</h1>
        <CreateForm />
      </div>
    </section>
  );
};

export default CreatePage;
