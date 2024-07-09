import React, { useEffect, useState } from "react";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import Loader from "../../Loader/Loader";
import { styles } from "@/app/styles/style";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { toast } from "react-hot-toast";

type Category = {
  _id: string;
  title: string;
};

const EditCategories: React.FC = () => {
  const { data, isLoading, refetch } = useGetHeroDataQuery("Categories", {
    refetchOnMountOrArgChange: true,
  });
  const [editLayout, { isSuccess: layoutSuccess, error }] =
    useEditLayoutMutation();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data) {
      setCategories(data.layout?.categories || []);
    }
    if (layoutSuccess) {
      refetch();
      toast.success("Categories updated successfully");
    }
    if (error && "data" in error) {
      const errorData = error as any;
      toast.error(errorData?.data?.message);
    }
  }, [data, layoutSuccess, error, refetch]);

  const handleCategoriesAdd = (id: string, value: string) => {
    setCategories((prevCategory) =>
      prevCategory.map((i) => (i._id === id ? { ...i, title: value } : i))
    );
  };

  const newCategoriesHandler = () => {
    if (categories.length === 0 || categories[categories.length - 1]?.title === "") {
      toast.error("Category title cannot be empty");
    } else {
      setCategories((prevCategory) => [
        ...prevCategory,
        { _id: `${Date.now()}`, title: "" },
      ]);
    }
  };

  const areCategoriesUnchanged = (
    originalCategories: Category[],
    newCategories: Category[]
  ) => {
    return JSON.stringify(originalCategories) === JSON.stringify(newCategories);
  };

  const isAnyCategoryTitleEmpty = (categories: Category[]) => {
    return categories.some((q) => q.title === "");
  };

  const editCategoriesHandler = async () => {
    if (
      !areCategoriesUnchanged(data.layout?.categories || [], categories) &&
      !isAnyCategoryTitleEmpty(categories)
    ) {
      await editLayout({
        type: "Categories",
        categories,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-[120px] text-center">
          <h1 className={`${styles.title}`}>All Categories</h1>
          {categories &&
            categories.map((item, index) => {
              const inputId = `category-title-${item._id}`;
              return (
                <div className="p-3" key={index}>
                  <div className="flex items-center w-full justify-center">
                    <label htmlFor={inputId} className="sr-only">
                      Category Title
                    </label>
                    <input
                      id={inputId}
                      className={`${styles.input} !w-[unset] !border-none !text-[20px]`}
                      value={item.title}
                      onChange={(e) =>
                        handleCategoriesAdd(item._id, e.target.value)
                      }
                      placeholder="Enter category title..."
                    />
                    <AiOutlineDelete
                      className="dark:text-white text-black text-[18px] cursor-pointer"
                      onClick={() => {
                        setCategories((prevCategory) =>
                          prevCategory.filter((i) => i._id !== item._id)
                        );
                      }}
                    />
                  </div>
                </div>
              );
            })}
          <br />
          <br />
          <div className="w-full flex justify-center">
            <IoMdAddCircleOutline
              className="dark:text-white text-black text-[25px] cursor-pointer"
              onClick={newCategoriesHandler}
            />
          </div>
          <div
            className={`${
              styles.button
            } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] 
            ${
              areCategoriesUnchanged(data.layout?.categories || [], categories) ||
              isAnyCategoryTitleEmpty(categories)
                ? "!cursor-not-allowed"
                : "!cursor-pointer !bg-[#42d383]"
            }
            !rounded absolute bottom-12 right-12`}
            onClick={
              areCategoriesUnchanged(data.layout?.categories || [], categories) ||
              isAnyCategoryTitleEmpty(categories)
                ? () => null
                : editCategoriesHandler
            }
          >
            Save
          </div>
        </div>
      )}
    </>
  );
};

export default EditCategories;
