import SearchForm from "@/components/searchForm";
import StartupCard ,{StartupTypeCard}  from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/query";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";

export default async function Home({searchParams}:{
  searchParams :Promise<{query?:string}>

}){
  const query = (await searchParams).query;
  const params ={search:query || null};


  // const posts = await client.fetch(STARTUPS_QUERY);
  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params});


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
        {posts?.length>0?(posts.map((post:StartupTypeCard)=>(
          <StartupCard key={post?._id} post={post}  />
        ))
        ):(
            <p className="no-results">No startups found.</p>
          )}
      </ul>

    </section>
      <SanityLive />
    </>
  );
}