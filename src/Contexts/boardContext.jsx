import React, { createContext, useReducer } from "react";
import boardReducer from "../reducer/Board";

export const BoardContext = createContext();

const BoardProvider = (props) => {
  const [boards ,dispatchBoardAction] = useReducer(boardReducer, []);
  return (
    <BoardContext.Provider value={{ boards,dispatchBoardAction }}>
        {props.children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
