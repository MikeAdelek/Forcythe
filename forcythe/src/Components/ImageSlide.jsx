// import React from "react";
// import africaFund from "../assets/africaFund.svg";
// import exec from "../assets/exec-pro.svg";
// import activity from "../assets/activity.svg";
// import stac from "../assets/stac.svg";
// import starks from "../assets/starks.svg";
// import phone from "../assets/phone.svg";

// const ImageSlide = () => {
//   return (
//     <>
//       <div className="flex flex-col gap-5">
//         {/* First slide - slides to the left */}
//         <div className="image-slide-container">
//           <div className="image-slide animate-slide-left">
//             <div className="image-slide-child">
//               <div className="image-child">
//                 <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
//                   {[1, 2, 3, 4, 5, 6].map((_, index) => (
//                     <>
//                       <div key={index} className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={africaFund}
//                           alt="africaFund"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={exec}
//                           alt="exec"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={activity}
//                           alt="activity"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={stac}
//                           alt="stac"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={starks}
//                           alt="starks"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={phone}
//                           alt="phone"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Duplicate set for seamless loop */}
//             <div className="image-slide-child">
//               <div className="image-child">
//                 <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
//                   {[1, 2, 3, 4, 5, 6].map((_, index) => (
//                     <>
//                       <div key={index} className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={africaFund}
//                           alt="africaFund"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={exec}
//                           alt="exec"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={activity}
//                           alt="activity"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={stac}
//                           alt="stac"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={starks}
//                           alt="starks"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={phone}
//                           alt="phone"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Slider - slides to the slideRight */}
//         <div className="image-slide-container">
//           <div className="image-slide animate-slide-right">
//             <div className="image-slide-child">
//               <div className="image-child">
//                 <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
//                   {[1, 2, 3, 4, 5, 6].map((_, index) => (
//                     <>
//                       <div key={index} className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={africaFund}
//                           alt="africaFund"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={exec}
//                           alt="exec"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={activity}
//                           alt="activity"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={stac}
//                           alt="stac"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={starks}
//                           alt="starks"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={phone}
//                           alt="phone"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             {/* Duplicate slider - slides to the right */}
//             <div className="image-slide-child">
//               <div className="image-child">
//                 <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
//                   {[1, 2, 3, 4, 5, 6].map((_, index) => (
//                     <>
//                       <div key={index} className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={africaFund}
//                           alt="africaFund"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={exec}
//                           alt="exec"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={activity}
//                           alt="activity"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={stac}
//                           alt="stac"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={starks}
//                           alt="starks"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                       <div className="relative w-auto h-[340px]">
//                         <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
//                         <img
//                           src={phone}
//                           alt="phone"
//                           className="overflow-hidden w-full h-full"
//                         />
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // Add required CSS for animation
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes slideLeft {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-100%)
//     }
//   }

//   @keyframes slideRight {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(0)
//     }
//   }

//   .animate-slide-left {
//     animation: slideLeft 700s linear infinite;
//   }
//   .animate-slide-right {
//     animation: slideRight 700s linear infinite;
//   }
// `;
// document.head.appendChild(style);

// export default ImageSlide;
