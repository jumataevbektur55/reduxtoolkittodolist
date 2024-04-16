import React from "react";
import { MdDeleteForever } from "react-icons/md";

const ProductCard = ({ el }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={el.url} alt="img" />
      </a>
      <div class="p-5">
        <div className=" flex items-center justify-center gap-28">
          <a href="#">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.title}{" "}
            </h5>
          </a>{" "}
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.price}{" "}
            </h5>
          </a>
        </div>
        <div className="">
          <button
            type="button"
            class="focus:outline-none text-2xl text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
