import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Layout = ({ className, title, setDate, children }) => {
  const days = ["7 days", "30 days", "90 days", "180 days"];

  const [active, setActive] = useState("7 days");

  return (
    <>
      <Sidebar />
      <main className={`layout ${className}`}>
        <div className="layout__header">
          <h1 className="layout__title">{title}</h1>
          <div className="layout__options">
            {setDate &&
              days.map((option) => {
                return (
                  <span
                    className={option === active ? "active" : ""}
                    key={option}
                    onClick={() => {
                      setDate(option.split(" ")[0]);
                      setActive(option);
                    }}
                  >
                    {option}
                  </span>
                );
              })}
          </div>
        </div>
        {children}
      </main>
    </>
  );
};
