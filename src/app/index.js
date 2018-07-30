import React from "react";
import Search from "./domains/Search";
import TheatreTabs from "./domains/Theatre/TheatreTabs";
import MovieList from "./domains/Movie/MovieList";
import Wrapper from "./components/Layouts/styled/Wrapper";
import globalStyles from "./styles";

const App = () => {
  return (
    <Wrapper 
      width="65%" 
      maxWidth="800px" 
      margin="0 auto">
        <Search />
        <TheatreTabs />
        <MovieList />
    </Wrapper>
  );
}

export default App;
