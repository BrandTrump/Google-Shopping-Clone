import { SearchParams } from "@/typings";
import { redirect } from "next/navigation";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

function SearchPage({ searchParams, params: { term } }: Props) {
  if (!term) {
    redirect("/");
  }

  // fetch from API...

  return <div>Welcome to the search results page</div>;
}

export default SearchPage;
