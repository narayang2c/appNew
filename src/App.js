import "./App.css";
import AdminDash from "./Pages/admin/AdminDash";
import Members from "./Pages/members/Members";
import Developers from "./Pages/developers/Developers";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      {/* <Members /> */}
      {/* <AdminDash /> */}
      <Developers />
    </div>
  );
}

export default App;
