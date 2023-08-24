import { FC } from "react";
import { useAuthentication } from "../../contexts/AuthContext";

type ProfileProps = {};
const Profile: FC<ProfileProps> = () => {
  const user = useAuthentication();

  return user ? <h1>Profile Found</h1> : <h1>Forbidden</h1>;
};

export default Profile;
