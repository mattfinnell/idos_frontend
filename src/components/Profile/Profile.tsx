import { FC } from "react";
import { useAuthentication } from "../../contexts/AuthContext";
import JsonViewer from "../Utilities/JsonViewer";

type ProfileProps = {};
const Profile: FC<ProfileProps> = () => {
  const user = useAuthentication();

  return user ? <JsonViewer data={user} /> : <h1>Forbidden</h1>;
};

export default Profile;
