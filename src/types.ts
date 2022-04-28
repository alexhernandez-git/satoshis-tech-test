import { ChangeEventHandler, FormEventHandler } from "react";

export type UserType = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
export interface UsersInterface {
  results: UserType[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  } | null;
  loading: boolean;
  error: Object | null;
}

export interface FormikValuesInterface {
  search: string;
  nationality: string;
}

export interface UseFormikInterface {
  initialValues: any;
  onSubmit: Function;
}

export interface AppContextInterface {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  values: {
    search: string;
    nationalities: string[];
  };
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  setFieldValue: any;
}
