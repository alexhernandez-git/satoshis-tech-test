import { useContext } from "react";
import { useRecoilValue } from "recoil";
import usersState from "../../state/usersState";
import UserCard from "../UserCard";
import { UsersInterface, UserType } from "../../types";
import { AppContext } from "../../App";
import Loader from "../Loader";
import VisibilitySensor from "react-visibility-sensor";

const UsersList = ({ setPage }: { setPage: Function }) => {
  const users = useRecoilValue<UsersInterface>(usersState);
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
  const onChangeVisibility = (visible: boolean) => {
    if (visible) {
      console.warn(visible);
      setPage((page: number) => page + 1);
    }
  };
  return (
    <div className="mb-5">
      {users.error ? (
        <span className="mt-4 text-sm text-red-500 dark:text-red-200 bg-white dark:bg-red-700 px-4 py-6 shadow sm:p-6 rounded-lg flex flex-1">
          It has been an error getting the users
        </span>
      ) : (
        <>
          {filteredUsers.length === 0 && !users.loading && (
            <span className="mt-4 text-sm text-gray-500 dark:text-gray-200 bg-white dark:bg-gray-700 px-4 py-6 shadow sm:p-6 rounded-lg flex flex-1">
              User not found
            </span>
          )}
          {filteredUsers.map((user: UserType) => (
            <UserCard user={user} key={user.email} />
          ))}

          <VisibilitySensor onChange={onChangeVisibility}>
            <div
              className="p-3"
              onClick={() => setPage((page: number) => page + 1)}
            ></div>
          </VisibilitySensor>
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
        </>
      )}
    </div>
  );
};

export default UsersList;
