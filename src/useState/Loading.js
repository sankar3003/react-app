import React, { useState } from "react";

function Loading() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isloading, loadAction] = useState(true);
//   console.log(isloading);

  return (
    <>
      <div>
        {isloading ? <p>loading...</p> : <h3>Component visible</h3>}

        <button onClick={() => loadAction((prevstate) => !prevstate)}>
          Click
        </button>
      </div>
    </>
  );
}

export default Loading;
