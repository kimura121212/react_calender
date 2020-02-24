import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Navigation from "./components/Navigation/container";

import AddScheduleDialog from "./components/AddScheduleDialog/container";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

dayjs.locale("ja");

import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
