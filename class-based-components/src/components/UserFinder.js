import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: this.context.users,
      searchTerm: "",
    };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  componentDidMount() {
    this.setState({filteredUsers: this.context.users});
  };

  render() {
    return (
      <Fragment>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}
//
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
