// import { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "../carousel/carosel.css";

// export default function ArticleCarousel() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/article");
//         if (!response.ok) {
//           throw new Error("Failed to fetch articles");
//         }
//         const data = await response.json();
        
//         const sortedArticles = data.articles
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//           .slice(0, 3);
          
//         setArticles(sortedArticles);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return (
//       <div className="carousel-loading">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="carousel-error alert alert-danger">
//         Error loading articles: {error}
//         <button 
//           className="btn btn-sm btn-outline-danger ms-2"
//           onClick={() => window.location.reload()}
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   if (articles.length === 0) {
//     return (
//       <div className="carousel-empty alert alert-info">
//         No articles available
//       </div>
//     );
//   }

//   return (
//     <Carousel fade indicators={false} controls={articles.length > 1}>
//       {articles.map((article) => (
//         <Carousel.Item key={article._id} className="carousel-item">
//           <div className="carousel-image-container position-relative">
//             <div className="position-absolute top-0 start-0 p-2 mt-3 ms-3 bg-light rounded-3" style={{zIndex:3}}>{new Date(article.createdAt).toLocaleDateString('en-US', {
//                                         weekday: 'long',
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}</div>
//             <img 
//               src={article.coverImg.url} 
//               alt={article.title}
//               className="carousel-image"
//               onError={(e) => {
//                 e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Available";
//               }}
//             />
//             <div className="carousel-overlay"></div>
//           </div>
//           <Carousel.Caption className="carousel-caption mx-5">
//             <h3 className="carousel-title">{article.title}</h3>
//             <p className="carousel-description">{article.desc}</p>
//             <button className="btn btn-dark carousel-button">
//               Read More
//             </button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Carousel from "react-bootstrap/Carousel";
import "../carousel/carosel.css";

export default function ArticleCarousel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/article");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        
        const sortedArticles = data.articles
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
          
        setArticles(sortedArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleReadMore = (articleId) => {
    // Navigate to the article page using the article's ID
    navigate(`/articles/${articleId}`);
  };

  if (loading) {
    return (
      <div className="carousel-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="carousel-error alert alert-danger">
        Error loading articles: {error}
        <button 
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="carousel-empty alert alert-info">
        No articles available
      </div>
    );
  }

  return (
    <Carousel fade indicators={false} controls={articles.length > 1}>
      {articles.map((article) => (
        <Carousel.Item key={article._id} className="carousel-item">
          <div className="carousel-image-container position-relative">
            <div className="position-absolute top-0 start-0 p-2 mt-3 ms-3 bg-light rounded-3" style={{zIndex:3}}>
              {new Date(article.createdAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <img 
              src={article.coverImg.url} 
              alt={article.title}
              className="carousel-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Available";
              }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption className="carousel-caption mx-5">
            <h3 className="carousel-title">{article.title}</h3>
            <p className="carousel-description">{article.desc}</p>
            <button 
              className="btn btn-dark carousel-button"
              onClick={() => handleReadMore(article._id)} // Add onClick handler
            >
              Read More
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}