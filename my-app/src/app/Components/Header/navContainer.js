import WebsiteName from "./websiteName";
import NavBar from "./navBar";
import Login from "./login";

export default function NavContainer() {
  return (
    <div className="grid grid-cols-3 w-full h-15 bg-amber-50">
      <div className="bg-amber-50">
        <WebsiteName />
      </div>
      <div className="bg-amber-50">
        <NavBar />
      </div>
      <div className="bg-amber-50">
        <Login />
      </div>
    </div>
  );
}
