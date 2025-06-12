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

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/article/${id}`)
                setArticle(response.data)
                if (response.data.author) {
                    fetchAuther(response.data.author);
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        const fetchAuther = async (auth_id) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/auth/users/${auth_id}`)
                setAuther(response.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchArticle()
    }, [id])

    if (loading) return <div className="loading">Loading article...</div>
    if (error) return <div className="error">Error: {error}</div>
    if (!article) return <div>Article not found</div>

    return (
        <>
            <div className="container" style={{ marginTop: '10rem' }}>
                <Navbar islogged={islogged} setIsLogged={setIsLogged} showBackground={true} isExpanded={false} darkmenu={"white"} />
                <div className="row">
                    <img src={article.coverImg.url} className='w-100 mb-4 rounded-5' alt="" />
                    
                    {/* Main Content Column */}
                    <div className="col-12 col-lg-8">
                        <h1 style={{fontSize:"3rem"}}>{article.title}</h1>
                        <p className='fs-5 my-4 text-body-tertiary'>
                            By {auther?.username || 'Unknown'} on {new Date(article.createdAt).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        
                        <div className="article-content mt-5">
                            {article.content.map((section, index) => (
                                <div key={index}>
                                    {section.subtitle && <h2 className='my-4'>{section.subtitle}</h2>}
                                    {section.paragraphs.map((para, i) => (
                                        <p className='fs-5' key={i}>{para}</p>
                                    ))}
                                    {section.images?.length > 0 && (
                                        <div className="section-images row">
                                            {section.images.map((img, j) => (
                                                <figure className='col-12 col-md-4' key={j}>
                                                    <img src={img.url} alt={img.caption} className="img-fluid" />
                                                    {img.caption && <figcaption>{img.caption}</figcaption>}
                                                </figure>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="sticky-top-wrapper" style={{ height: 'fit-content' }}>
                            <div className="article-sidebar position-sticky top-0 p-3 bg-light rounded-3" 
                                style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                                <h3 className="mb-4">Other Articles You May Like</h3>
                                {/* Replace with actual recommended articles */}
                                <div className="mb-3">
                                    <h5>Article Title 1</h5>
                                    <p>Brief description...</p>
                                </div>
                                <div className="mb-3">
                                    <h5>Article Title 2</h5>
                                    <p>Brief description...</p>
                                </div>
                                <div className="mb-3">
                                    <h5>Article Title 3</h5>
                                    <p>Brief description...</p>
                                </div>
                                {auther && (
                                    <>
                                        <hr />
                                        <h4>About the Author</h4>
                                        <p>{auther.username}</p>
                                        <p>{auther.bio || 'No bio available'}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/articles" className="back-link">
                    <div className='d-flex justify-content-center my-5'>
                        <button className="btn btn-dark px-4 py-3">← Back to all articles</button>
                    </div>
                </Link>
            </div>
            <Footer />
        </>
    )
}