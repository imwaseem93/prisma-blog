import Comments from "@/app/components/Comments";
import FormComment from "@/app/components/FormComment";


const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 min-h-screen">
      <h1 className="text-3xl font-bold">Post one</h1>
      <p>Written by:</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        saepe odio sunt asperiores ipsam iure facere consequatur at inventore
        aperiam?
      </div>
      <Comments/>
      <FormComment/>
    </div>
  );
};

export default BlogPage;
