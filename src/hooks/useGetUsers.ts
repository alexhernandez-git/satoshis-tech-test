import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { number } from "yup";
import usersState from "../state/usersState";
import { UsersInterface } from "../types";

interface UseGetUsersInterface {
  results?: number;
  nationalities?: string[];
  page?: number;
}

const useGetUsers = ({
  results = 50,
  nationalities = [],
  page = 1,
}: UseGetUsersInterface = {}) => {
  const setUsers = useSetRecoilState(usersState);

  const { isLoading, error, data } = useQuery(
    ["randomUsersData", results, nationalities, page],
    () =>
      axios
        .get(
          `https://randomuser.me/api/?inc=name,nat,picture,email,phone&results=${results}&page=${page}&nat=${nationalities
            .join(",")
            .toLowerCase()}`
        )
        .then((res) => res.data)
        .catch((err) => err.response)
  );

  useEffect(() => {
    if (isLoading) {
      setUsers((users: UsersInterface) => {
        return { ...users, loading: true, error: error };
      });
    } else {
      if (error) setUsers({ ...data, loading: false, error: error });
      else {
        if (page === 1) {
          setUsers({ ...data, loading: false, error: null });
        } else {
          setUsers((users: UsersInterface) => ({
            ...users,
            ...data,
            results: [...users.results, ...data.results],
            loading: false,
            error: null,
          }));
        }
      }
    }
  }, [isLoading]);
};

export default useGetUsers;
