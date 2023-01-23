import { useEffect } from "react";

import { ArticleType } from "types/article.type";

const useFilter = (
  setFilter: (arg: ArticleType[]) => void,
  data: ArticleType[],
  values: string
) => {
  useEffect(() => {
    if (values.length > 0) {
      const titleFilteredData = data.filter((el) => {
        return (
          (el.title.toLowerCase().includes(
            values
              .toLocaleLowerCase()
              .split(" ")
              .find((el) => el.toLocaleLowerCase()) ||
              values.toLocaleLowerCase()
          ) &&
            el.summary.toLowerCase().includes(
              values
                .toLocaleLowerCase()
                .split(" ")
                .find((el) => el.toLocaleLowerCase()) ||
                values.toLocaleLowerCase()
            )) ||
          el.title.toLowerCase().includes(
            values
              .toLocaleLowerCase()
              .split(" ")
              .find((el) => el.toLocaleLowerCase()) ||
              values.toLocaleLowerCase()
          )
        );
      });

      const summaryFiltedredData = data.filter((el) => {
        return (
          !el.title.toLowerCase().includes(
            values
              .toLocaleLowerCase()
              .split(" ")
              .find((el) => el.toLocaleLowerCase()) ||
              values.toLocaleLowerCase()
          ) &&
          el.summary.toLowerCase().includes(
            values
              .toLocaleLowerCase()
              .split(" ")
              .find((el) => el.toLocaleLowerCase()) ||
              values.toLocaleLowerCase()
          )
        );
      });

      setFilter(titleFilteredData.concat(summaryFiltedredData));
    } else {
      setFilter(data);
    }
  }, [values, data, setFilter]);
};
export { useFilter };
