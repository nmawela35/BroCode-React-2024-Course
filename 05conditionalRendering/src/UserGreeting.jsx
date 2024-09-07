export default function UserGreeting(props) {
  //     if (props.isLoggedIn) {
  //     return <h1>Welcome: {props.username}</h1>;
  //   }
  //   return <h3>Please Login</h3>;

  return props.isLoggedIn ? (
    <h1>Welcome: {props.username}</h1>
  ) : (
    <h3>Please Login</h3>
  );
}
