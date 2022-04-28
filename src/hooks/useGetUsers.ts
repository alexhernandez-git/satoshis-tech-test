import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import usersState from "../state/usersState";

interface UseGetUsersInterface {
  results?: number;
  nationalities?: string[];
}

const useGetUsers = ({
  results = 50,
  nationalities = [],
}: UseGetUsersInterface = {}) => {
  const setUsers = useSetRecoilState(usersState);

  const { isLoading, error, data } = useQuery(
    ["randomUsersData", results, nationalities],
    () =>
      axios
        .get(
          `https://randomuser.me/api/?inc=name,nat,picture,email,phone&results=${results}&nat=${nationalities
            .join(",")
            .toLowerCase()}`
        )
        .then((res) => res.data)
        .catch((err) => err.response)
  );
  useEffect(() => {
    if (isLoading) {
      setUsers((users) => {
        return { ...users, loading: true, error: error };
      });
    } else {
      if (error) setUsers({ ...data, loading: false, error: error });
      else setUsers({ ...data, loading: false, error: null });
    }
  }, [isLoading]);
};

export default useGetUsers;
