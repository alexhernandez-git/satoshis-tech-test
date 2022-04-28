import {
  useState,
  createContext,
  ChangeEventHandler,
  FormEventHandler,
} from "react";
import Layout from "./components/Layout";
import Search from "./components/Search";
import Filters from "./components/Filters";
import useGetUsers from "./hooks/useGetUsers";
import UsersList from "./components/UsersList";
import useFormikForm from "./hooks/useSearchForm";

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

export const AppContext = createContext<AppContextInterface>({
  mobileFiltersOpen: false,
  setMobileFiltersOpen: () => {},
  values: {
    search: "",
    nationalities: [],
  },
  handleChange: () => {},
  handleSubmit: () => {},
  setFieldValue: () => {},
});

function App() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  const { values, handleChange, handleSubmit, setFieldValue } = useFormikForm({
    initialValues: {
      search: "",
      nationalities: [],
    },
    onSubmit: () => {},
  });

  useGetUsers({
    results: 25,
    nationalities: values.nationalities,
  });

  return (
    <AppContext.Provider
      value={{
        mobileFiltersOpen,
        setMobileFiltersOpen,
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
      }}
    >
      <Layout>
        <div className={"max-w-3xl mx-auto px-6 flex flex-col lg:px-6 mt-10"}>
          {/* Filters */}
          <Filters />
          <main className={`lg:col-span-8 xl:col-span-6 xl:col-start-3`}>
            {/* Search */}
            <Search />
            {/* Users List */}
            <UsersList />
          </main>
        </div>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
