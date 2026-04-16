"use client";
import Image from "next/image";
import { useState } from "react";
type portfolio = {
  user_image: String;
  user_name: String;
  user_bio: String;
  user_skill_set: String[];
};
const Portfolio = () => {
  const [portfolios, set_portfolios] = useState<portfolio[]>([]);

  return (
    <div>
      {portfolios.length < 1 ? (
        <div className="flex justify-center items-center bg-amber-50">
          <p> No portfolio loaded yet</p>
        </div>
      ) : (
        portfolios.map((portfolio) => (
          <div>
            <Image
              src={`/${portfolio.user_image}`}
              alt="loading"
              width={200}
              height={200}
            />
            <h1>{portfolio.user_name}</h1>
            <p>{portfolio.user_bio}</p>
            {portfolio.user_skill_set.map((id) => (
              <ul>
                <li>{id}</li>
              </ul>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Portfolio;
