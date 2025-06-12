import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../assets/navFolder/Navbar";
import Footer from '../assets/footerFolder/Footer';
import ToTop from '../assets/toTopBtn/toTop';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

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
      alert("Please login or sign up to save articles.");
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
            <div className="col-12 col-md-6 col-lg-4 my-5" key={article._id}>
              <div className="w-100 border border-1 border-dark rounded-5 shadow-sm">
                <img src={article.coverImg.url} className="card-img-top rounded-top-5" alt={article.title} />
                <div className='card-body p-3'>
                  <h2 className='card-title mb-3'>{article.title}</h2>
                  <p className='card-text'>{article.desc}</p>
                  <div className='d-flex justify-content-between align-items-center mx-4'>
                    <Link to={`/articles/${article._id}`} className="read-more">
                      <button className='btn btn-dark'>Read Article</button>
                    </Link>
                    <div
                      onClick={() => handleSaveToggle(article._id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {savedArticles.includes(article._id) ? (
                        <FaBookmark color="#ec7e4a" />
                      ) : (
                        <FaRegBookmark />
                      )}
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
    </>
  );
}
