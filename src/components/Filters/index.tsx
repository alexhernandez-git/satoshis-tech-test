import { Fragment, useContext } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { AppContext } from "../../App";

const nationalities = [
  { label: "Australia", value: "AU" },
  { label: "Brazil", value: "BR" },
  { label: "Canada", value: "CA" },
  { label: "Switzerland", value: "CH" },
  { label: "Germany", value: "DE" },
  { label: "Denmark", value: "DK" },
  { label: "Spain", value: "ES" },
  { label: "Finland", value: "FI" },
  { label: "France", value: "FR" },
  { label: "United Kingdom", value: "GB" },
  { label: "Ireland", value: "IE" },
  { label: "Iran, Islamic Republic Of", value: "IR" },
  { label: "Norway", value: "NO" },
  { label: "Netherlands", value: "NL" },
  { label: "New Zealand", value: "NZ" },
  { label: "Turkey", value: "TR" },
  { label: "United States", value: "US" },
];
const filters = [
  {
    id: "nationalities",
    name: "Nationalities",
    options: nationalities,
  },
];

const Filters = ({ setPage }: { setPage: Function }) => {
  const {
    mobileFiltersOpen,
    setMobileFiltersOpen,
    values: { nationalities },
    setFieldValue,
  } = useContext(AppContext);

  const handleCheck = (e: { target: HTMLInputElement }) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let newNationalitiesArray = [];
    if (isChecked) {
      newNationalitiesArray = [...nationalities, value];
    } else {
      newNationalitiesArray = nationalities.filter(
        (nationality) => nationality !== value
      );
    }
    setPage(1);
    setFieldValue("nationalities", newNationalitiesArray);
  };

  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="ml-auto relative max-w-xs w-full h-full bg-white dark:bg-gray-700 shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Filters
              </h2>
              <button
                type="button"
                className="-mr-2 w-10 h-10 bg-white dark:bg-gray-800 p-2 rounded-md flex items-center justify-center text-gray-400"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200 dark:border-gray-900">
              <h3 className="sr-only">Categories</h3>

              {filters.map((section) => (
                <Disclosure
                  as="div"
                  defaultOpen={true}
                  key={section.id}
                  className="border-t border-gray-200 dark:border-gray-900 px-4 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="px-2 py-3 bg-white dark:bg-gray-700 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon className="h-5 w-5" />
                            ) : (
                              <PlusSmIcon className="h-5 w-5" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                onChange={handleCheck}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={nationalities.some(
                                  (nationality) => nationality === option.value
                                )}
                                className="h-4 w-4 border-gray-300 rounded text-orange-500 focus:ring-orange-400"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500 dark:text-gray-200"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Filters;
