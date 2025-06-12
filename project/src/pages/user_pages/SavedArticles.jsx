import Navbar from "../../assets/navFolder/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../assets/footerFolder/Footer";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

export default function SavedArticles() {
  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });
  const [savedArticles, setSavedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSavedArticles = async () => {
      if (!islogged || !userId || !token) return;

      try {
        const res = await axios.get(`http://localhost:5000/api/auth/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const savedIds = res.data.savedArticles || [];
        setSavedArticles(savedIds);

        if (savedIds.length > 0) {
          const fetchedArticles = await Promise.all(
            savedIds.map(id => axios.get(`http://localhost:5000/api/article/${id}`).then(res => res.data))
          );
          setArticles(fetchedArticles);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
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

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger text-center mt-5">
      Error: {error}
    </div>
  );

  return (
    <>
      <Navbar 
        islogged={islogged} 
        setIsLogged={setIsLogged} 
        showBackground={true} 
        isExpanded={false} 
        darkmenu={"white"} 
      />

      <main className="container py-5" style={{ marginTop: "10rem" }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-4 text-center text-dark fw-bold">Your Saved Articles</h1>
            
            {articles.length === 0 ? (
              <div className="text-center py-5">
                <h4 className="text-muted">No saved articles found</h4>
                <Link to="/articles" className="btn btn-primary mt-3">
                  Browse Articles
                </Link>
              </div>
            ) : (
              <div className="row g-4">
                {articles.map((article) => (
                  <div key={article._id} className="col-12">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="row g-0 h-100">
                        <div className="col-md-3">
                          <img 
                            src={article.coverImg?.url} 
                            className="img-fluid rounded-start h-100 object-fit-cover" 
                            alt={article.title} 
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="card-body d-flex flex-column h-100">
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text text-muted">
                                  {article.desc || 'No description provided.'}
                                </p>
                              </div>
                              <button 
                                onClick={() => handleSaveToggle(article._id)}
                                className="btn btn-link p-0 ms-3"
                                aria-label={savedArticles.includes(article._id) ? "Unsave article" : "Save article"}
                              >
                                {savedArticles.includes(article._id) ? (
                                  <FaBookmark size={20} color="#ec7e4a" />
                                ) : (
                                  <FaRegBookmark size={20} />
                                )}
                              </button>
                            </div>
                            <div className="mt-auto">
                              <Link 
                                to={`/articles/${article._id}`} 
                                className="btn btn-dark mt-2"
                              >
                                Read Article
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}