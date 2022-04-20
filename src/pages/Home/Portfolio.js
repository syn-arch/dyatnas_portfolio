import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import Isotope from "isotope-layout";
import OnImagesLoaded from "react-on-images-loaded";
import Loading from "../../components/Loading";
import Lightbox from "../../components/Lightbox";

function Portfolio(props) {
  const { URL } = useContext(GlobalContext);
  const [portfolios, setPortfolios] = useState([]);
  const [categories, setCategories] = useState([]);
  const isotope = React.useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    axios.get(`${URL}/portfolios`).then((result) => {
      setPortfolios(result.data.data);
    });

    axios.get(`${URL}/categories`).then((result) => {
      setCategories(result.data.data);
    });

    if (imagesLoaded) {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        percentPosition: true,
        layoutMode: "masonry",
      });

      return () => isotope.current.destroy();
    }
  }, [URL, imagesLoaded]);

  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      {!imagesLoaded && <Loading />}
      <div className="w-11/12 mx-auto">
        {imagesLoaded && (
          <>
            <h1
              className="text-2xl font-bold mt-24 relative text-gray-800
        after:content-['']
        after:ml-4
        after:inline-block
        after:border-b-2
        after:border-b-black
        after:w-28
        after:absolute
        after:top-4
        "
            >
              Portfolios
            </h1>
            <ul className="flex my-4 flex-wrap">
              <li
                className={`mr-2 ${
                  filterKey === "*" && "border-b border-b-black"
                }`}
              >
                <button onClick={handleFilterKeyChange("*")}>All</button>
              </li>
              {categories.map((category, index) => {
                return (
                  <li
                    key={index}
                    className={`mr-2 ${
                      filterKey === category.name.replace(/ /g, "") &&
                      "border-b border-b-black"
                    }`}
                  >
                    <button
                      onClick={handleFilterKeyChange(
                        category.name.replace(/ /g, "")
                      )}
                    >
                      {category.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {portfolios.length > 0 && (
          <OnImagesLoaded onLoaded={() => setImagesLoaded(true)} timeout={2000}>
            <div
              className="mt-4 filter-container"
              style={{ display: imagesLoaded ? "block" : "none" }}
            >
              {portfolios.map((portfolio, index) => {
                return <Lightbox key={index} picture={portfolio} />;
              })}
            </div>
          </OnImagesLoaded>
        )}

        <div className="h-10"></div>
      </div>
    </>
  );
}

export default Portfolio;
