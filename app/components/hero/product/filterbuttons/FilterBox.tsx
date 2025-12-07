"use client";
import { DataObj } from "@/types/types";
import styles from "./FilterBox.module.css";
import FilterDropdown from "./FilterDropdown";
import Bottomline from "@/app/components/footer/Bottomline";
import { useDispatch, useSelector } from "react-redux";
import {
  productRecommended,
  productSideFilter,
  selectedFilteredData,
} from "@/store/selectors/product-selector";
import { filterSideBox, populateData } from "@/store/slices/product-slice";
import { useEffect } from "react";

export default function FilterBox({ data }: { data: DataObj[] }) {
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const sideFilter = useSelector(productSideFilter);
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectedFilteredData);
  const recommended = useSelector(productRecommended);

  useEffect(() => {
    const filteredData = data.filter((prod) => {
      const matchesCategory =
        sideFilter.category === "all" || prod.category === sideFilter.category;

      const matchesRating =
        sideFilter.rating === "all" ||
        (Number(sideFilter.rating) - 1 < prod.rating.rate &&
          prod.rating.rate <= Number(sideFilter.rating));

      return matchesCategory && matchesRating;
    });

    dispatch(populateData(filteredData));
  }, [sideFilter.category, sideFilter.rating, recommended]);

  return (
    <div className={styles.box}>
      <div>
        <h3 className={styles.title}>{filteredProducts.length} items</h3>
      </div>
      <div className={styles.filterStack}>
        <FilterDropdown title="Category">
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="radio"
                    name="category"
                    checked={
                      category.toLowerCase() ===
                      sideFilter.category.toLowerCase()
                    }
                    onChange={() =>
                      dispatch(
                        filterSideBox({ type: "category", value: category })
                      )
                    }
                  />
                  <p>{category}</p>
                </label>
              </li>
            ))}
          </ul>
        </FilterDropdown>
        <Bottomline style={styles.line} />
        <FilterDropdown title="Ratings">
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  name="ratings"
                  checked={"all" === sideFilter.rating.toLowerCase()}
                  onChange={() =>
                    dispatch(filterSideBox({ type: "rating", value: "all" }))
                  }
                />
                <p>All</p>
              </label>
            </li>
            {Array.from({ length: 5 }).map((_, indx) => (
              <li key={indx}>
                <label>
                  <input
                    type="radio"
                    name="ratings"
                    checked={String(5 - indx) === sideFilter.rating}
                    onChange={() =>
                      dispatch(
                        filterSideBox({
                          type: "rating",
                          value: String(5 - indx),
                        })
                      )
                    }
                  />
                  <p>Below {5 - indx}</p>
                </label>
              </li>
            ))}
          </ul>
        </FilterDropdown>
        <Bottomline style={styles.line} />
      </div>
    </div>
  );
}
