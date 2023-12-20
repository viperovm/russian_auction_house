import MasterRoute from "./routes/MasterRoute"
import "./assets/scss/index.scss"
import { Provider } from "react-redux"
import store from "./store/store"

const App = () => {
  return (
    <Provider store={store}>
      <MasterRoute />
    </Provider>
  )
}

export default App