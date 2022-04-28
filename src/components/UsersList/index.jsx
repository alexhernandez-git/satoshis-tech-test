import { useContext } from "react";
import { useRecoilValue } from "recoil";
import usersState from "../../state/usersState";
import UserCard from "../UserCard";
import { UserType } from "../../types";
import { AppContext } from "../../App";
import Loader from "../Loader";

const UsersList = () => {
  const users = useRecoilValue(usersState);
  const {
    values: { search },
  } = useContext(AppContext);
  const filteredUsers = users.results.filter((user: UserType) => {
    const lowerCaseSearch = search.toLowerCase();
    const lowerCaseFirstName = user.name.first.toLowerCase();
    const lowerCaseLastName = user.name.last.toLowerCase();
    const fullName = `${lowerCaseFirstName} ${lowerCaseLastName}`;
    return fullName.includes(lowerCaseSearch);
  });
  return (
    <div className="mb-5">
      {users.loading && (
        <div className="mt-4">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      )}
      {filteredUsers.length === 0 && !users.loading && (
        <span className="mt-4 text-sm text-gray-500 dark:text-gray-200 bg-white dark:bg-gray-700 px-4 py-6 shadow sm:p-6 rounded-lg flex flex-1">
          User not found
        </span>
      )}
      {filteredUsers.map((user) => (
        <UserCard user={user} key={user.email} />
      ))}
    </div>
  );
};

export default UsersList;
