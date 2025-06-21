import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../assets/navFolder/Navbar";
import { FaTrash, FaPlus } from "react-icons/fa"; //FaPen
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });

  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [confirmUsername, setConfirmUsername] = useState("");
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);
  const [newAdminData, setNewAdminData] = useState({ username: "", email: "", password: "" });
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [newArticleData, setNewArticleData] = useState({
  coverImg:{url: ""}, 
  title: "",
  author: localStorage.getItem("userId"),
  desc: "",
  content: [
    {
      subtitle: "",
      paragraphs: [""],
      images: [{url: "", caption: ""}],
    },
  ],
});
const [validationErrors, setValidationErrors] = useState({
    username: "",
    email: "",
    password: ""
  });

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (activeTab === "users" || activeTab === "admins") {
  //     const fetchUsers = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/api/auth/users", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setUsers(res.data.users);
  //       } catch (err) {
  //         setError("Failed to fetch users");
  //         console.error(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchUsers();
  //   } else if (activeTab === "articles") {
  //     const fetchArticles = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/api/article");
  //         setArticles(res.data.articles);
  //       } catch (err) {
  //         console.error("Failed to fetch articles", err);
  //       }
  //     };
  //     fetchArticles();
  //   }
  // }, [token, activeTab]);

  // const handleDelete = async () => {
  //   if (selectedUser && confirmUsername === selectedUser.username) {
  //     try {
  //       await axios.delete(`http://localhost:5000/api/auth/users/${selectedUser._id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       const loggedInAdminId = localStorage.getItem("userId");
  //       if (selectedUser._id === loggedInAdminId) {
  //         localStorage.clear();
  //         setIsLogged(false);
  //       } else {
  //         setUsers(users.filter(u => u._id !== selectedUser._id));
  //         setShowDeleteModal(false);
  //         toast.warning("You have deleted admin successfully!"); // Added toast notification
  //         setConfirmUsername("");
  //       }
  //     } catch (err) {
  //       console.error("Delete failed", err);
  //     }
  //   }
  // };

  // const openDeleteModal = (user) => {
  //   setSelectedUser(user);
  //   setShowDeleteModal(true);
  // };

  // const handleAddAdmin = async () => {
  //   try {
  //     await axios.post("http://localhost:5000/api/auth/register-admin", newAdminData);
  //     setShowAddAdminModal(false);
  //     setNewAdminData({ username: "", email: "", password: "" });
  //     toast.success("Admin added successfully"); // Added toast notification
  //   } catch (err) {
  //     alert("Error adding admin");
  //     console.error(err);
  //   }
  // };


  useEffect(() => {
    if (activeTab === "users" || activeTab === "admins") {
      const fetchUsers = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/auth/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsers(res.data.users);
        } catch (err) {
          setError("Failed to fetch users");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchUsers();
    } else if (activeTab === "articles") {
      const fetchArticles = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/article");
          setArticles(res.data.articles);
        } catch (err) {
          console.error("Failed to fetch articles", err);
        }
      };
      fetchArticles();
    }
  }, [token, activeTab]);

  // Input validation functions
  const validateUsername = (username) => {
    if (!username) return "Username is required";
    if (username.length < 3) return "Username must be at least 3 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one capital letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Password must contain at least one special character";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdminData({ ...newAdminData, [name]: value });
    
    // Validate on change
    switch (name) {
      case "username":
        setValidationErrors({ 
          ...validationErrors, 
          username: validateUsername(value) 
        });
        break;
      case "email":
        setValidationErrors({ 
          ...validationErrors, 
          email: validateEmail(value) 
        });
        break;
      case "password":
        setValidationErrors({ 
          ...validationErrors, 
          password: validatePassword(value) 
        });
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    if (selectedUser && confirmUsername === selectedUser.username) {
      try {
        await axios.delete(`http://localhost:5000/api/auth/users/${selectedUser._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const loggedInAdminId = localStorage.getItem("userId");
        if (selectedUser._id === loggedInAdminId) {
          localStorage.clear();
          setIsLogged(false);
          toast.warning("You have deleted admin successfully!");
          setTimeout(() => navigate("/"), 1500);
        } else {
          setUsers(users.filter(u => u._id !== selectedUser._id));
          setShowDeleteModal(false);
          setConfirmUsername("");
          toast.success("Admin deleted successfully!");
        }
      } catch (err) {
        toast.error("Failed to delete admin");
        console.error(err);
      }
    }
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleAddAdmin = async () => {
    // Validate all fields before submitting
    const errors = {
      username: validateUsername(newAdminData.username),
      email: validateEmail(newAdminData.email),
      password: validatePassword(newAdminData.password)
    };
    
    setValidationErrors(errors);
    
    // Check if there are any errors
    if (Object.values(errors).some(error => error !== "")) {
      toast.error("Please fix the form errors");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register-admin", 
        newAdminData
      );
      
      // Update the local state with the new admin
      setUsers([...users, response.data.user]);
      
      setShowAddAdminModal(false);
      setNewAdminData({ username: "", email: "", password: "" });
      toast.success("Admin added successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error adding admin");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar
        islogged={islogged}
        setIsLogged={setIsLogged}
        showBackground={true}
        isExpanded={false}
        darkmenu={"white"}
      />

      <div className="container" style={{ marginTop: "10rem" }}>
        <h1 className="text-dark">Admin Dashboard</h1>
        <p>
          Welcome to the admin dashboard. Here you can manage users, view statistics,
          and perform administrative tasks.
        </p>

        <ul className="nav nav-tabs mt-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "users" ? "active" : ""}`}
              onClick={() => setActiveTab("users")}
            >
              Users
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "admins" ? "active" : ""}`}
              onClick={() => setActiveTab("admins")}
            >
              Admins
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "articles" ? "active" : ""}`}
              onClick={() => setActiveTab("articles")}
            >
              Articles
            </button>
          </li>
        </ul>

        <div className="tab-content mt-3">
          {activeTab === "users" && (
            loading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <div className="table-responsive mt-3">
                <table className="table table-striped table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.filter(u => u.role === "user").map((user, idx) => (
                      <tr key={user._id}>
                        <td>{idx + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Email via Gmail
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}

          {activeTab === "admins" && (
            <>
              <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-success" onClick={() => setShowAddAdminModal(true)}>+ Add Admin</button>
              </div>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.filter(u => u.role === "admin").map((admin, idx) => (
                    <tr key={admin._id}>
                      <td>{idx + 1}</td>
                      <td>{admin.username}</td>
                      <td>{admin.email}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => openDeleteModal(admin)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeTab === "articles" && (
            <>
              <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-success" onClick={() => setShowAddArticleModal(true)}><FaPlus /> Add Article</button>
              </div>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Likes</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article, idx) => (
                    <tr key={article._id}>
                      <td>{idx + 1}</td>
                      <td><img src={article.coverImg.url} alt="cover" width={70} height={50} /></td>
                      <td>{article.title}</td>
                      <td>{article.likesCount}</td>
                      <td>
                        <button className="btn btn-danger btn-sm me-2" onClick={() => {
                          setSelectedArticle(article);
                          setShowDeleteModal(true);
                        }}>
                          <FaTrash />
                        </button>
                        {/* <button className="btn btn-secondary btn-sm">
                          <FaPen />
                        </button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser ? (
            <>
              <p>Type <strong>{selectedUser?.username}</strong> to confirm deletion:</p>
              <Form.Control
                type="text"
                value={confirmUsername}
                onChange={(e) => setConfirmUsername(e.target.value)}
              />
            </>
          ) : selectedArticle ? (
            <>
              <p>Are you sure you want to delete <strong>{selectedArticle?.title}</strong>?</p>
            </>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          {selectedUser ? (
            <Button variant="danger" onClick={handleDelete} disabled={confirmUsername !== selectedUser?.username}>
              Delete
            </Button>
          ) : selectedArticle ? (
            <Button variant="danger" onClick={() => {
              axios.delete(`http://localhost:5000/api/article/${selectedArticle._id}`)
                .then(() => {
                  setArticles(articles.filter(a => a._id !== selectedArticle._id));
                  setShowDeleteModal(false);
                  setSelectedArticle(null);
                })
                .catch(err => console.error("Failed to delete article", err));
            }}>
              Delete
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>

      {/* Add Admin Modal */}
      {/* <Modal show={showAddAdminModal} onHide={() => setShowAddAdminModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={newAdminData.username}
                onChange={(e) => setNewAdminData({ ...newAdminData, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newAdminData.email}
                onChange={(e) => setNewAdminData({ ...newAdminData, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={newAdminData.password}
                onChange={(e) => setNewAdminData({ ...newAdminData, password: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddAdminModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddAdmin}>
            Add Admin
          </Button>
        </Modal.Footer>
      </Modal> */}
      <Modal show={showAddAdminModal} onHide={() => setShowAddAdminModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={newAdminData.username}
                onChange={handleInputChange}
                isInvalid={!!validationErrors.username}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.username}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newAdminData.email}
                onChange={handleInputChange}
                isInvalid={!!validationErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newAdminData.password}
                onChange={handleInputChange}
                isInvalid={!!validationErrors.password}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.password}
              </Form.Control.Feedback>
              <Form.Text muted>
                Password must contain:
                <ul>
                  <li>At least 8 characters</li>
                  <li>1 capital letter</li>
                  <li>1 number</li>
                  <li>1 special character</li>
                </ul>
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddAdminModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddAdmin}>
            Add Admin
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Article Modal */}
<Modal show={showAddArticleModal} onHide={() => setShowAddArticleModal(false)} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Add Article</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
  <Form.Label>Cover Image URL</Form.Label>
  <Form.Control
    type="text"
    value={newArticleData.coverImg.url}
    onChange={(e) =>
      setNewArticleData({
        ...newArticleData,
        coverImg: { ...newArticleData.coverImg, url: e.target.value },
      })
    }
  />
</Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={newArticleData.title}
          onChange={(e) =>
            setNewArticleData({ ...newArticleData, title: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
  <Form.Label>Description</Form.Label>
  <Form.Control
    as="textarea"
    rows={2}
    value={newArticleData.desc}
    onChange={(e) =>
      setNewArticleData({ ...newArticleData, desc: e.target.value })
    }
  />
</Form.Group>

      {newArticleData.content.map((content, secIndex) => (
        <div key={secIndex} className="p-3 mb-3 border rounded bg-light">
          <Form.Group className="mb-2">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              type="text"
              value={content.subtitle}
              onChange={(e) => {
                const updatedcontent = [...newArticleData.content];
                updatedcontent[secIndex].subtitle = e.target.value;
                setNewArticleData({ ...newArticleData, content: updatedcontent });
              }}
            />
          </Form.Group>

          {/* Paragraphs */}
          <Form.Label>Paragraphs</Form.Label>
          {content.paragraphs.map((p, pIndex) => (
            <Form.Control
              key={pIndex}
              as="textarea"
              rows={7}
              className="mb-2"
              value={p}
              onChange={(e) => {
                const updatedcontent = [...newArticleData.content];
                updatedcontent[secIndex].paragraphs[pIndex] = e.target.value;
                setNewArticleData({ ...newArticleData, content: updatedcontent });
              }}
            />
          ))}
          {content.paragraphs.length < 4 && (
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => {
                const updatedcontent = [...newArticleData.content];
                updatedcontent[secIndex].paragraphs.push("");
                setNewArticleData({ ...newArticleData, content: updatedcontent });
              }}
            >
              + Paragraph
            </Button>
          )}

          <hr />

          {/* Images */}
<Form.Label>Image URLs & Captions</Form.Label>
{content.images.map((img, imgIndex) => (
  <div key={imgIndex} className="d-flex gap-2 mb-2">
    <Form.Control
      type="text"
      placeholder="Image URL"
      value={img.url}
      onChange={(e) => {
        const updatedContent = [...newArticleData.content];
        updatedContent[secIndex].images[imgIndex].url = e.target.value;
        setNewArticleData({ ...newArticleData, content: updatedContent });
      }}
    />
    <Form.Control
      type="text"
      placeholder="Caption"
      value={img.caption}
      onChange={(e) => {
        const updatedContent = [...newArticleData.content];
        updatedContent[secIndex].images[imgIndex].caption = e.target.value;
        setNewArticleData({ ...newArticleData, content: updatedContent });
      }}
    />
  </div>
))}

{content.images.length < 4 && (
  <Button
    variant="outline-secondary"
    size="sm"
    onClick={() => {
      const updatedContent = [...newArticleData.content];
      updatedContent[secIndex].images.push({ url: "", caption: "" });
      setNewArticleData({ ...newArticleData, content: updatedContent });
    }}
  >
    + Image
  </Button>
)}
        </div>
      ))}
      <Button
  variant="outline-secondary"
  onClick={() => {
    if (newArticleData.content.length < 10) {
      setNewArticleData({
        ...newArticleData,
        content: [
          ...newArticleData.content,
          {
            subtitle: "",
            paragraphs: [""],
            images: [{ url: "", caption: "" }],
          },
        ],
      });
    } else {
      alert("You can only add up to 10 sections.");
    }
  }}
>
  + Add Section
</Button>

    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowAddArticleModal(false)}>
      Cancel
    </Button>
    <Button
      variant="primary"
      onClick={async () => {
        try {
          await axios.post("http://localhost:5000/api/article", newArticleData);
          alert("Article added successfully!");
          setShowAddArticleModal(false);
          // You can also re-fetch articles here if needed

        } catch (err) {
          alert("Error adding article");
          console.error(err);
        }
      }}
    >
      Add Article
    </Button>
  </Modal.Footer>
</Modal>
<ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
