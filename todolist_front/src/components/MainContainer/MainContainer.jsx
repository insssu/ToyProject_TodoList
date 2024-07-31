

/** @jsxImportSource @emotion/react */
import * as s from './style';

function MainContainer({children}) {

  return (
    <>
      <div css={s.container}>
        <h1>TODO LIST</h1>
        <p><input type="month" /></p>
      </div>
      <div css={s.layout}>
        {children}
      </div>
    </>
  )
}

export default MainContainer;