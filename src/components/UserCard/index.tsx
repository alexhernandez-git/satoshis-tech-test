import useAccordion from "../../hooks/useAccordion";
import { UserType } from "../../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const UserCard = ({ user }: { user: UserType }) => {
  const { show, height, toggleAccordion, closeAccordion, contentSpace } =
    useAccordion();

  const userCardRef = useRef<any>();
  useOutsideClick(userCardRef, () => closeAccordion());

  return (
    <div
      className="mt-4 cursor-pointer"
      ref={userCardRef}
      data-testid={"toggle-div"}
      onMouseDown={toggleAccordion}
    >
      <ul className="space-y-4">
        <li className="">
          <div className="motion-safe:animate-fadeIn bg-white dark:bg-gray-700 px-4 py-6 shadow sm:p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex space-x-3 items-center">
                <div className="flex-shrink-0">
                  {true ? (
                    <LazyLoadImage
                      className="h-10 w-10 rounded-full"
                      src={user?.picture?.medium}
                    />
                  ) : (
                    <svg
                      className="bg-gray-100 text-gray-300 rounded-full overflow-hidden h-10 w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    <span className="">
                      {user?.name?.first} {user?.name?.last}
                    </span>
                  </p>
                  <span className="inline-flex items-center text-sm">
                    <span className="font-medium text-orange-500">
                      {user?.email}
                    </span>
                  </span>
                </div>
              </div>
              <span
                data-testid={"big-screen-button"}
                className="hidden sm:block inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-3xl text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
              >
                {show ? "See less" : "See more"}
              </span>
            </div>

            <span
              data-testid={"small-screen-button"}
              className="block text-center sm:hidden w-full items-center px-4 py-2 mt-4 shadow-sm text-sm font-medium rounded-3xl text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
            >
              {show ? "See less" : "See more"}
            </span>
            <div
              ref={contentSpace}
              style={{ maxHeight: `${height}` }}
              className="overflow-auto transition-max-height duration-500 ease-in-out"
            >
              <div className="mt-5">
                <div className="bg-gray-50 dark:bg-gray-600 shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                      User Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                      Personal details.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                          {user?.name?.first} {user?.name?.last}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                          {user?.email}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">
                          Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                          {user?.phone}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">
                          Nationality
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                          {user?.nat}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
