import MainContainer from "./components/MainContainer/MainContainer";
import { Global } from "@emotion/react";
import { reset } from "./styles/global";
import MainList from "./components/MainList/MainList";
import SubList from "./components/SubList/SubList";

function App() {
  return (
    <>
      <Global styles={reset} />
        <MainContainer>
          <MainList />
          <SubList />
        </MainContainer>
    </>
  );
}

export default App;
