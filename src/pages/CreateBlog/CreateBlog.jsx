
export default function CreateBlog() {


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/blogs", {
        method: "POST",
        body: JSON.stringify({test:"asdjla"}),
        headers: { "Content-Type": "application/json" },
      }).then((res) => window.location.replace("/blogs"))
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Create blog</h1>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
    </div>
  );
}
