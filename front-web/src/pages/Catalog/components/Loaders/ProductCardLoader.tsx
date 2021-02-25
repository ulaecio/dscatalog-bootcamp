import React from "react";
import ContentLoader from "react-content-loader";
import { generateList } from "../../../../core/utils/list";

const ProductCardLoader = () => {
  const loaderItems = generateList(3);
  return (
    <>
      {loaderItems.map((item) => (
        <ContentLoader
          key={item}
          speed={1}
          width={250}
          height={335}
          viewBox="0 0 250 335"
          backgroundColor="#c9c9c9"
          foregroundColor="#e3e3e3"
        >
          <circle cx="31" cy="31" r="15" />
          <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
          <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
          <rect x="0" y="0" rx="10" ry="10" width="250" height="335" />
        </ContentLoader>
      ))}
    </>
  );
};
export default ProductCardLoader;
