import ContentLoader, { Facebook } from "react-content-loader";

export const MyFacebookLoader = () => <Facebook />;

export const TableRowLoader = () => (
  <ContentLoader viewBox="0 0 380 250">
    {/* Only SVG shapes */}
    <rect x="10" y="20" rx="5" ry="5" width="70" height="15" />
    <rect x="220" y="20" rx="4" ry="4" width="50" height="15" />
    <rect x="320" y="20" rx="3" ry="3" width="20" height="15" />

    <rect x="10" y="70" rx="5" ry="5" width="70" height="15" />
    <rect x="220" y="70" rx="4" ry="4" width="50" height="15" />
    <rect x="320" y="70" rx="3" ry="3" width="20" height="15" />

    <rect x="10" y="120" rx="5" ry="5" width="70" height="15" />
    <rect x="220" y="120" rx="4" ry="4" width="50" height="15" />
    <rect x="320" y="120" rx="3" ry="3" width="20" height="15" />

    <rect x="10" y="170" rx="5" ry="5" width="70" height="15" />
    <rect x="220" y="170" rx="4" ry="4" width="50" height="15" />
    <rect x="320" y="170" rx="3" ry="3" width="20" height="15" />

    <rect x="10" y="220" rx="5" ry="5" width="70" height="15" />
    <rect x="220" y="220" rx="4" ry="4" width="50" height="15" />
    <rect x="320" y="220" rx="3" ry="3" width="20" height="15" />
  </ContentLoader>
);

export const DivicesLoader = () => (
  <ContentLoader viewBox="0 0 380 300">
    {/* Only SVG shapes */}
    <circle cx="215" cy="145" r="50" width="70" height="15" />
    <circle cx="70" cy="100" r="60" width="50" height="15" />
    <circle cx="120" cy="200" r="75" width="20" height="15" />
  </ContentLoader>
);
