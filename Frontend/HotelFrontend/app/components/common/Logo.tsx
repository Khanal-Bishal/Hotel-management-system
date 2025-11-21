// import { Link } from "react-router";

// const Logo = () => {
//   return (
//     <Link to="/" className="text-b text-2xl-medium font-medium">
//       <span className="text-3xl-medium text-primary hover:text-red-300">
//         南新
//       </span>
//       大学
//     </Link>

import { Link } from 'react-router';
import React from 'react';

const Logo = () => {
  return (
    <Link to="/" className="text-b text-2xl-medium font-medium">
      <span className="text-3xl-medium text-primary hover:text-red-300">
        {' '}
        南
      </span>
      宿云
    </Link>
  );
};

export default Logo;
