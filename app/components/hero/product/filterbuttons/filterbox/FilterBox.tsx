"use client";
import { DataObj } from "@/types/types";
import styles from "./FilterBox.module.css";
import FilterDropdown from "./FilterDropdown";
import Bottomline from "@/app/components/common/Bottomline";
import { useDispatch, useSelector } from "react-redux";
import {
  productSideFilter,
  selectedFilteredData,
} from "@/store/selectors/product-selector";
import { applyFilters, filterSideBox } from "@/store/slices/product-slice";

export default function FilterBox({ data }: { data: DataObj[] }) {
  const dispatch = useDispatch();
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const sideFilter = useSelector(productSideFilter);
  const filteredProducts = useSelector(selectedFilteredData);

  function handleChange(type: "rating" | "category", value: string) {
    dispatch(filterSideBox({ type, value }));
    dispatch(applyFilters());
  }

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
                    onChange={() => handleChange("category", category)}
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
                  onChange={() => handleChange("rating", "all")}
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
                    onChange={() => handleChange("rating", String(5 - indx))}
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
