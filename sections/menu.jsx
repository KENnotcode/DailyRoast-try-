import React, { useEffect, useState } from "react";
import Section from "@/components/Section";
import IcedCoffeeCard from "@/components/IcedCoffeeCard";
import { RunningText, TitlePage } from "@/components/TypingText";

const OurMenu = ({ setCardLength }) => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    // Fetch coffee products from the Fake Coffee API
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log to verify data structure
        setProducts(data);
      })
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <>
      <Section id="coffee-menu">
        <RunningText />
        <TitlePage title="Coffee Menu" />

        <div id="coffee-menu" style={{ overflowX: "auto" }}>
          <div className="mt-[50px] flex flex-row min-h-[70vh] gap-2">
            {products.length > 0 ? (
              products.map((product) => (
                <IcedCoffeeCard
                  key={product.id}
                  image_url={product.image_url} // Use the correct property here
                  name={product.name} // Use the correct property here
                  price={product.price} // Use the correct property here
                  active={activeProduct === product.id}
                  handleClick={() => setActiveProduct(product.id)}
                  setCardLength={setCardLength}
                />
              ))
            ) : (
              <p className="text-center">Loading products...</p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default OurMenu;
