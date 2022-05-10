import { Sidebar } from "./Sidebar";

export const Layout = ({ className, title, children }) => {
  return (
    <>
      <Sidebar />
      <main className={`layout ${className}`}>
        <h1 className="layout__title">{title}</h1>
        {children}
      </main>
    </>
  );
};
