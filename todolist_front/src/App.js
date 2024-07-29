import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import ListAll from "./components/ListAll/ListAll";
import UncompletedList from "./components/UncompletedList/UncompletedList";
import CompletedList from "./components/CompletedList/CompletedList";
import { Global } from "@emotion/react";
import { reset } from "./styles/global";

function App() {
  return (
    <>
      <Global styles={reset} />
        <MainContainer>
          <ListAll />
          <UncompletedList />
          <CompletedList />
        </MainContainer>
    </>
  );
}

export default App;
