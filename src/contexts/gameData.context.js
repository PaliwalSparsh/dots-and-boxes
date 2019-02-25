import React from "react";

export const GameData = React.createContext({
  state: {
    cellMatrix: []
  },
  dispatch: () => {}
});

export const GameDataProvider = GameData.Provider;
