import { Sidebar } from "./Sidebar";

export const Layout = ({ className, title, children }) => {
  return (
    <>
      <Sidebar />
      <main className={className}>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
};
