import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const result = useFetchAlbumsQuery(user);

  console.log(result);
  // console.log(data, error, isLoading);

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
