import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Navigation from "./components/Navigation/container";

import AddScheduleDialog from "./components/AddScheduleDialog/container";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

dayjs.locale("ja");

import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
