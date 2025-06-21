import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from "../assets/navFolder/Navbar";
import Footer from '../assets/footerFolder/Footer';
import ToTop from '../assets/toTopBtn/toTop';
import { FaRegBookmark, FaBookmark,FaHeart,FaRegHeart } from 'react-icons/fa';

export default function ArticlesList() {
  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/article');
        setArticles(response.data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      if (!islogged || !userId || !token) return;

      try {
        const res = await axios.get(`http://localhost:5000/api/auth/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSavedArticles(res.data.savedArticles || []);
      } catch (err) {
        console.error("Failed to fetch saved articles:", err);
      }
    };

    fetchSavedArticles();
  }, [islogged, userId, token]);

  const handleSaveToggle = async (articleId) => {
    if (!islogged) {
      toast.warning("Please login or sign up to save articles.");
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/users/${userId}/saved-articles`,
        { articleId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSavedArticles(res.data.savedArticles || []);
    } catch (error) {
      console.error("Error saving/removing article:", error);
    }
  };



  const handleLikeToggle = async (articleId) => {
    if (!islogged) {
      toast.warning("Please login to like articles.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/article/${articleId}/like`,
        {userId  }
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      // Update the articles state with the new like information
      setArticles(articles.map(article => {
        if (article._id === articleId) {
          return {
            ...article,
            likes: res.data.likes,
            likesCount: res.data.likesCount
          };
        }
        return article;
      }));
    } catch (error) {
      console.error("Error liking/unliking article:", error);
      toast.error("Failed to update like status");
    }
  };

  if (loading) return <div className="loading">Loading articles...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Navbar
        islogged={islogged}
        setIsLogged={setIsLogged}
        showBackground={true}
        isExpanded={false}
        darkmenu={"white"}
      />
      <div className="container" style={{ marginTop: '10rem' }}>
        <div className='text-center'>
        <h1 className='mb-3'>Discover. Learn. Transform.</h1>
        <p className="lead">Welcome to the PeakFitness Articles Hub — your go-to source for science-backed strategies, expert advice, and powerful tips to help you build strength, sharpen your mind, and live with unstoppable energy. Whether you&apos;re just starting out or pushing past plateaus, our articles are here to guide every step of your fitness journey.</p>
        </div>
        <div className="row" >
          {articles.map(article => (
            <div className="col-12 my-5" key={article._id}>
              <div className="w-100 border border-1 border-dark rounded-5 shadow-sm">
                <div className="row">
                  <div className="col-12 col-md-4 p-5 text-center d-flex align-items-center justify-content-center">
                <img src={article.coverImg.url} className="img-fluid rounded-5" alt={article.title} />
                </div>
                <div className='col-12 col-md-8 p-5 p-md-3 d-flex align-items-center justify-content-center'>
                  <div>
                  <h1 className='card-title mb-3'>{article.title}</h1>
                  <p className='card-text'>{article.desc}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/articles/${article._id}`} className="read-more">
                      <button className='btn btn-dark'>Read Article</button>
                    </Link>
                    <div className='d-flex align-items-center me-5'>
          <div
            onClick={() => handleLikeToggle(article._id)}
            style={{ cursor: 'pointer', marginRight: '15px' }}
            title={islogged ? '' : 'Login to like'}
          >
            {article.likes.includes(userId) ? (
              <FaHeart color="red" />
            ) : (
              <FaRegHeart />
            )}
            <span className="ms-2">{article.likesCount}</span>
          </div>
          <div
            onClick={() => handleSaveToggle(article._id)}
            style={{ cursor: 'pointer' }}
            title={islogged ? '' : 'Login to save'}
          >
            {savedArticles.includes(article._id) ? (
              <FaBookmark color="#ec7e4a" />
            ) : (
              <FaRegBookmark />
            )}
          </div>
        </div>
      {/* </div> */}
                    {/* <div
                      onClick={() => handleSaveToggle(article._id)}
                      style={{ cursor: 'pointer' }}
                      className='me-5'
                    >
                      {savedArticles.includes(article._id) ? (
                        <FaBookmark color="#ec7e4a" />
                      ) : (
                        <FaRegBookmark />
                      )}
                    </div> */}
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToTop />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
