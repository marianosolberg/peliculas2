import { MoviesGrid } from "../components/movieGrid/MoviesGrid";
import { Search } from "../components/search/Search";

export function LandingPage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}
