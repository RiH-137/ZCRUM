// const AuthLayout = ({ children }) => {
//   return <div className="flex justify-center pt-20">{children}</div>;
// };

// export default AuthLayout;

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center pt-20 pb-5">
      {children}
    </div>
  );
}
export default Layout;