import SearchForm from "@/components/searchForm";
import StartupCard  from "@/components/StartupCard";
export default async function Home({searchParams}:{
  searchParams :Promise<{query?:string}>

}){
  const query = (await searchParams).query;

  const posts =[
      {
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:'Anirudh ofc'},
    _id:1,
    description:'This is a desc',
    image:'https://images.unsplash.com/photo-1730722005859-f93a79460bae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
    category:"Robots",
    title:"we Robots",
  },
  ];
  return(
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch your startup <br/> Connect with investors</h1>
        <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches and Get Noticed
         </p>
      <SearchForm query={query} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query?`Search results for "${query}"`:'All startups'}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length>0?(posts.map((post:StartupCardtype)=>(
          <StartupCard key={post?._id} post={post}  />
        ))
        ):(
            <p className="no-results">No startups found.</p>
          )}
      </ul>

    </section>
    </>
  );
}