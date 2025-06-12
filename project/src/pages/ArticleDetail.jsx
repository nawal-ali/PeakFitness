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
            } catch (err) {
                console.error("Failed to fetch all articles", err);
            }
        };

        fetchArticle();
        fetchAllArticles();
    }, [id]);

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

    const currentIndex = allArticles.findIndex(a => a._id === id);
    const nextArticles = allArticles.slice(currentIndex + 1, currentIndex + 4);

    return (
        <>
            <div className="container" style={{ marginTop: '10rem' }}>
                <Navbar islogged={islogged} setIsLogged={setIsLogged} showBackground={true} isExpanded={false} darkmenu={"white"} />
                
                <div className="row">
                    {/* Main Article Image */}
                    <div className="col-12">
                        <img 
                            src={article.coverImg.url} 
                            className='img-fluid mb-4 rounded-4 shadow-sm' 
                            alt={article.title} 
                            style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                        />
                    </div>
                    
                    {/* Main Content Column */}
                    <div className="col-12 col-lg-8 pe-lg-5">
                        <h1 className="display-4 fw-bold mb-4">{article.title}</h1>
                        
                        <div className="d-flex align-items-center mb-5">
                            {auther?.avatar && (
                                <img 
                                    src={auther.avatar} 
                                    alt={auther.username} 
                                    className="rounded-circle me-3" 
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
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
                                                    <img 
                                                        src={img.url} 
                                                        alt={img.caption} 
                                                        className="img-fluid rounded-3 shadow-sm" 
                                                    />
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
                        <div className="sticky-top" style={{ marginTop: '10rem' }}>
                            <div className="card border-0 shadow-sm rounded-4 mb-4">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold mb-4">More Articles</h5>
                                    
                                    {nextArticles.length > 0 ? (
                                        nextArticles.map((art, idx) => (
                                            <div className="mb-4 pb-3 border-bottom" key={idx}>
                                                {art.coverImg?.url && (
                                                    <img 
                                                        src={art.coverImg.url} 
                                                        alt={art.title} 
                                                        className="img-fluid rounded-3 mb-3" 
                                                        style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                                                    />
                                                )}
                                                <h6 className="fw-bold">{art.title}</h6>
                                                <p className="text-muted small">By {art.author || 'Unknown'}</p>
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
                        <button className="btn btn-dark px-4 py-3 rounded-pill fw-semibold">
                            <i className="bi bi-arrow-left me-2"></i> Back to all articles
                        </button>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    )
}