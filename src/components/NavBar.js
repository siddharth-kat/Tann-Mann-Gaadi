// import * as React from "react";
// import './App.css';
// function NavBar() {
//   return (
//     <div className="flex justify-center items-center px-16 py-3 w-full text-lg font-bold shadow-sm bg-neutral-100 bg-opacity-70 max-md:px-5 max-md:max-w-full">
//       <div className="flex gap-5 justify-between items-center px-px w-full max-w-[1230px] max-md:flex-wrap max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="shrink-0 self-stretch max-w-full aspect-[1.49] w-[116px]"
//         />
//         <div className="flex gap-5 justify-between self-stretch my-auto leading-[111%] text-neutral-700 max-md:flex-wrap">
//           <div>About Us</div>
//           <div>Courses</div>
//           <div>Community</div>
//           <div>Contact Us</div>
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4936f5e312c2b6feac2ee162a988ed2a420f031380d6860b743d831f674b10fd?"
//           className="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[146px]"
//         />
//         <div className="justify-center self-stretch px-5 py-2.5 my-auto text-white uppercase whitespace-nowrap bg-orange-400 rounded-xl">
//           Register
//         </div>
//       </div>
//     </div>
//   );
// }

// -----------------------------------------------------------------
// export default NavBar;
// import * as React from "react";
// import { Link } from "react-router-dom";
// import './App.css';

// function NavBar() {
//   return (
//     <div className="flex justify-center items-center px-16 py-3 w-full text-lg font-bold shadow-sm bg-neutral-100 bg-opacity-70 max-md:px-5 max-md:max-w-full">
//       <div className="flex gap-5 justify-between items-center px-px w-full max-w-[1230px] max-md:flex-wrap max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="shrink-0 self-stretch max-w-full aspect-[1.49] w-[116px]"
//         />
//         <div className="flex gap-5 justify-between self-stretch my-auto leading-[111%] text-neutral-700 max-md:flex-wrap">
//           <Link to="/about-us" className="text-neutral-700">About Us</Link>
//           <div>Courses</div>
//           <div>Community</div>
//           <div>Contact Us</div>
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4936f5e312c2b6feac2ee162a988ed2a420f031380d6860b743d831f674b10fd?"
//           className="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[146px]"
//         />
//         <div className="justify-center self-stretch px-5 py-2.5 my-auto text-white uppercase whitespace-nowrap bg-orange-400 rounded-xl">
//           Register
//         </div>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------
import * as React from "react";
// import './App.css';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex justify-center items-center px-16 py-3 w-full text-lg font-bold shadow-sm bg-neutral-100 bg-opacity-70 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center px-px w-full max-w-[1230px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22199f14810999fbeb3d63f75ad1935470287656fe435be7b36a1b62785f88c1?apiKey=df85b483d97442268acfc4e7f3531450&"
          className="shrink-0 self-stretch max-w-full aspect-[1.49] w-[116px]"
        />
        <div className="flex gap-5 justify-between self-stretch my-auto leading-[111%] text-neutral-700 max-md:flex-wrap">
        <div><Link className='btn btn-light ms-1' to="about">About Us</Link></div>
        <div><Link className='btn btn-light ms-1' to="courses">Courses</Link></div>
        <div><Link className='btn btn-light ms-1' to="community">Community</Link></div>
        <div><Link className='btn btn-light ms-1' to="contact">Contact Us</Link></div>

        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4936f5e312c2b6feac2ee162a988ed2a420f031380d6860b743d831f674b10fd?"
          className="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[146px]"
        />
        <div className="justify-center self-stretch px-5 py-2.5 my-auto text-white uppercase whitespace-nowrap bg-orange-400 rounded-xl">
          Register
        </div>
      </div>
    </div>
  );
}

export default NavBar;

