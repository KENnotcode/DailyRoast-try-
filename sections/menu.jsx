import React, { useEffect, useState } from "react";
import Section from "@/components/Section";
import { RunningText, TitlePage } from "@/components/TypingText";

import CoffeeCard from "@/components/CoffeeCard";
import HotcoffeeCard from "@/components/HotCoffeeCard";
import PremiumTeaCard from "@/components/PremiumTeaCard";

import hotCoffeeProducts from "@/constant/hotcoffeedata";
import premiumTea from "@/constant/premiumteadata";

const OurMenu = ({ setTotalQuantity, setCardLength }) => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [hotcoffeeActive, setHotcoffeeActive] = useState(null);
  const [premiumTeaActive, setPremiumTeaActive] = useState(null);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api") // Ensure this is a correct API URL
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <>
      {/* Coffee Menu Section */}
      <Section id="coffee-menu">
        <RunningText />
        <TitlePage title="Coffee Menu" />
        <div id="coffee-menu" style={{ overflowX: "auto" }}>
          <div className="mt-[40px] flex flex-row min-h-[70vh] gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CoffeeCard
                  key={product.id}
                  {...product}
                  active={activeProduct === product.id}
                  handleClick={() => setActiveProduct(product.id)}
                  setCardLength={setCardLength}
                />
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </Section>

      {/* Premium Tea Section */}
      <Section id="premiumtea">
        <RunningText />
        <TitlePage title="Premium Tea" />
        <div id="premiumtea" style={{ overflowX: "auto" }}>
          <div className="mt-[50px] flex flex-row min-h-[70vh] gap-2">
            {premiumTea.length > 0 ? (
              premiumTea.map((product) => (
                <PremiumTeaCard
                  key={product.id}
                  product={product}
                  active={premiumTeaActive === product.id}
                  handleClick={() => setPremiumTeaActive(product.id)}
                  setCardLength={setCardLength}
                />
              ))
            ) : (
              <p>Loading premium tea products...</p>
            )}
          </div>
        </div>
      </Section>

      {/* Hot Coffee Section */}
      <Section id="hotcoffee">
        <RunningText />
        <TitlePage title="Hot Coffee" />
        <div id="hotcoffee" style={{ overflowX: "auto" }}>
          <div className="mt-[50px] flex flex-row min-h-[70vh] gap-2">
            {hotCoffeeProducts.length > 0 ? (
              hotCoffeeProducts.map((coffee) => (
                <HotcoffeeCard
                  key={coffee.id}
                  coffee={coffee}
                  active={hotcoffeeActive === coffee.id}
                  handleClick={() => setHotcoffeeActive(coffee.id)}
                  setTotalQuantity={setTotalQuantity}
                  setCardLength={setCardLength}
                />
              ))
            ) : (
              <p>Loading hot coffee products...</p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default OurMenu;