import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from "../assets/navFolder/Navbar";
import Footer from '../assets/footerFolder/Footer';

export default function ArticleDetail() {
    const [islogged, setIsLogged] = useState(() => {
        return localStorage.getItem("islogged") === "true";
    });
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [auther, setAuther] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [allArticles, setAllArticles] = useState([]);
    const [randomArticles, setRandomArticles] = useState([]);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/article/${id}`);
                setArticle(response.data);
                if (response.data.author) {
                    fetchAuther(response.data.author);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchAuther = async (auth_id) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/auth/users/${auth_id}`);
                setAuther(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        const fetchAllArticles = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/article`);
                setAllArticles(response.data.articles);
                getRandomArticles(response.data.articles, id);
            } catch (err) {
                console.error("Failed to fetch all articles", err);
            }
        };

        fetchArticle();
        fetchAllArticles();
    }, [id]);

    const getRandomArticles = (articles, currentId) => {
        if (articles.length <= 1) {
            setRandomArticles([]);
            return;
        }
        
        const otherArticles = articles.filter(a => a._id !== currentId);
        const shuffled = [...otherArticles].sort(() => 0.5 - Math.random());
        setRandomArticles(shuffled.slice(0, 3));
    };

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading article...</span>
            </div>
        </div>
    );
    
    if (error) return (
        <div className="alert alert-danger text-center mt-5" role="alert">
            Error: {error}
        </div>
    );
    
    if (!article) return (
        <div className="alert alert-warning text-center mt-5" role="alert">
            Article not found
        </div>
    );

    return (
        <>
            <div className="container" style={{ marginTop: '10rem' }}>
                <Navbar islogged={islogged} setIsLogged={setIsLogged} showBackground={true} isExpanded={false} darkmenu={"white"} />
                
                <div className="row">
                    {/* Main Article Image */}
                    <div className="col-12">
                        {article.coverImg?.url ? (
                            <img 
                                src={article.coverImg.url} 
                                className='img-fluid mb-4 rounded-4 shadow-sm' 
                                alt={article.title} 
                                style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Available";
                                }}
                            />
                        ) : (
                            <div className="img-fluid mb-4 rounded-4 shadow-sm bg-light d-flex justify-content-center align-items-center" 
                                style={{ height: '500px', width: '100%' }}>
                                <span className="text-muted">No image available</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Main Content Column */}
                    <div className="col-12 col-lg-8 pe-lg-5">
                        <h1 className="display-4 fw-bold mb-4">{article.title}</h1>
                        
                        <div className="d-flex align-items-center mb-5">
                            {auther?.avatar ? (
                                <img 
                                    src={auther.avatar} 
                                    alt={auther.username} 
                                    className="rounded-circle me-3" 
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/50?text=No+Avatar";
                                    }}
                                />
                            ) : (
                                <div className="rounded-circle me-3 bg-secondary d-flex justify-content-center align-items-center" 
                                    style={{ width: '50px', height: '50px' }}>
                                    <span className="text-white small">No Avatar</span>
                                </div>
                            )}
                            <div>
                                <p className="mb-0 text-muted">
                                    By <span className="fw-semibold text-dark">{auther?.username || 'Unknown'}</span>
                                </p>
                                <p className="mb-0 text-muted">
                                    {new Date(article.createdAt).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                        
                        <div className="article-content">
                            {article.content.map((section, index) => (
                                <div key={index} className="mb-5">
                                    {section.subtitle && <h2 className='my-4 fw-bold'>{section.subtitle}</h2>}
                                    {section.paragraphs.map((para, i) => (
                                        <p className='fs-5 lh-base mb-4' key={i}>{para}</p>
                                    ))}
                                    {section.images?.length > 0 && (
                                        <div className="row g-3 my-4">
                                            {section.images.map((img, j) => (
                                                <figure className={`col-12 ${section.images.length > 1 ? 'col-md-6' : ''}`} key={j}>
                                                    {img.url ? (
                                                        <img 
                                                            src={img.url} 
                                                            alt={img.caption || 'Article image'} 
                                                            className="img-fluid rounded-3 shadow-sm"
                                                            onError={(e) => {
                                                                e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Available";
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="img-fluid rounded-3 shadow-sm bg-light d-flex justify-content-center align-items-center" 
                                                            style={{ height: '300px', width: '100%' }}>
                                                            <span className="text-muted">No image</span>
                                                        </div>
                                                    )}
                                                    {img.caption && (
                                                        <figcaption className="text-center text-muted mt-2">
                                                            <small>{img.caption}</small>
                                                        </figcaption>
                                                    )}
                                                </figure>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Sidebar Column */}
                    <div className="col-12 col-lg-4">
                        <div className="sticky-top bg-secondary-subtle p-5 rounded-5 mt-5">
                            <div className="bg-light p-3 border-0 shadow-sm rounded-4 mb-4">
                                <div className="card-body">
                                    <h3 className="card-title fw-bold pb-3 mb-4 border-bottom">More Articles You May Like</h3>
                                    
                                    {randomArticles.length > 0 ? (
                                        randomArticles.map((art, idx) => (
                                            <div className="mb-4 pb-3 border-bottom" key={idx}>
                                                {art.coverImg?.url ? (
                                                    <img 
                                                        src={art.coverImg.url} 
                                                        alt={art.title} 
                                                        className="img-fluid rounded-3 mb-3" 
                                                        style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                                                        onError={(e) => {
                                                            e.target.src = "https://via.placeholder.com/300x150?text=Image+Not+Available";
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="img-fluid rounded-3 mb-3 bg-light d-flex justify-content-center align-items-center" 
                                                        style={{ height: '120px', width: '100%' }}>
                                                        <span className="text-muted small">No image</span>
                                                    </div>
                                                )}
                                                <h6 className="fw-bold">{art.title}</h6>
                                                <Link 
                                                    to={`/articles/${art._id}`} 
                                                    className="text-decoration-none fw-semibold d-flex align-items-center"
                                                >
                                                    Read more <i className="bi bi-arrow-right ms-2"></i>
                                                </Link>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-muted">No related articles found.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='d-flex justify-content-center my-5 py-4'>
                    <Link to="/articles" className="text-decoration-none">
                        <button className="btn btn-dark px-4 py-3 mt-5 rounded-pill fw-semibold">
                            <i className="bi bi-arrow-left me-2"></i> Back to all articles
                        </button>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    )
}