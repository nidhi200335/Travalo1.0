import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.length > 0 && (
            <div className="fpItem" key={data[0]._id}>
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?t=st=1721189545~exp=1721193145~hmac=a7f41cee18ecaacd1b49e41eb64902b1192384605d2911e876794267d3756c8c&w=996"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{data[0].name}</span>
              <span className="fpCity">{data[0].city}</span>
              <span className="fpPrice">Starting from ${data[0].cheapestPrice}</span>
              {data[0].rating && <div className="fpRating">
                <button>{data[0].rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          )}

          {data.length > 1 && (
            <div className="fpItem" key={data[1]._id}>
              <img
                src="https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?t=st=1721189293~exp=1721192893~hmac=524ad45311d46e57f674e0925ed3032c75dd4d6a7380381a045192aae06e7509&w=996"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{data[1].name}</span>
              <span className="fpCity">{data[1].city}</span>
              <span className="fpPrice">Starting from ${data[1].cheapestPrice}</span>
              {data[1].rating && <div className="fpRating">
                <button>{data[1].rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          )}

          {data.length > 2 && (
            <div className="fpItem" key={data[2]._id}>
              <img
                src="https://img.freepik.com/premium-photo/inside-floating-palace_865967-69812.jpg?w=996"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{data[2].name}</span>
              <span className="fpCity">{data[2].city}</span>
              <span className="fpPrice">Starting from ${data[2].cheapestPrice}</span>
              {data[2].rating && <div className="fpRating">
                <button>{data[2].rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          )}

          {data.length > 3 && (
            <div className="fpItem" key={data[3]._id}>
              <img
                src="https://img.freepik.com/free-photo/building-night_1127-3365.jpg?t=st=1721189686~exp=1721193286~hmac=125d19bc53e15b9acfa5b192f69076327fcd89781e7ca919fe7cf569bac6c770&w=996"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{data[3].name}</span>
              <span className="fpCity">{data[3].city}</span>
              <span className="fpPrice">Starting from ${data[3].cheapestPrice}</span>
              {data[3].rating && <div className="fpRating">
                <button>{data[3].rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

// import useFetch from "../../hooks/useFetch";
// import "./featuredProperties.css";

// const FeaturedProperties = () => {
//   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

//   return (
//     <div className="fp">
//       {loading ? (
//         "Loading"
//       ) : (
//         <>
//           {data.map((item) => (
//             <div className="fpItem" key={item._id}>
//               <img
//                 src={item.photos[0]}
//                 alt=""
//                 className="fpImg"
//               />
//               <span className="fpName">{item.name}</span>
//               <span className="fpCity">{item.city}</span>
//               <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
//               {item.rating && <div className="fpRating">
//                 <button>{item.rating}</button>
//                 <span>Excellent</span>
//               </div>}
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default FeaturedProperties;
// import React from 'react'
// import "./featuredProperties.css"
// const FeaturedProperties = () => {
//   return (
//     <div className='fp'>
//         <div className="fpItem">
//         <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className='fpImg' />  
//       <span className="fpName">Aparthotel Stare Miasto</span>
//       <span className="fpCity">Madrid</span>
//       <span className="fpPrice">Starting from 10k</span>
//       <div className="fpRating">
//         <button>8.9</button>
//       <span>Excellent</span>
//       </div>
//         </div>
//         <div className="fpItem">
//         <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className='fpImg' />  
//       <span className="fpName">Aparthotel Stare Miasto</span>
//       <span className="fpCity">Madrid</span>
//       <span className="fpPrice">Starting from 10k</span>
//       <div className="fpRating">
//         <button>8.9</button>
//       <span>Excellent</span>
//       </div>
//         </div>
//         <div className="fpItem">
//         <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className='fpImg' />  
//       <span className="fpName">Aparthotel Stare Miasto</span>
//       <span className="fpCity">Madrid</span>
//       <span className="fpPrice">Starting from 10k</span>
//       <div className="fpRating">
//         <button>8.9</button>
//       <span>Excellent</span>
//       </div>
//         </div>
//         <div className="fpItem">
//         <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className='fpImg' />  
//       <span className="fpName">Aparthotel Stare Miasto</span>
//       <span className="fpCity">Madrid</span>
//       <span className="fpPrice">Starting from 10k</span>
//       <div className="fpRating">
//         <button>8.9</button>
//       <span>Excellent</span>
//       </div>
//         </div>
//      </div>
//   )
// }

// export default FeaturedProperties