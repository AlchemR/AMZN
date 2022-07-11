import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    {/* {console.log(store.getState().session.id)}
    {console.log(store.getState().entities.users)}
    {console.log(store.getState().entities.users[store.getState().session.id].account_fname)} */}
    <HashRouter>
      <App />
    </HashRouter>
    </Provider>
);

export default Root;