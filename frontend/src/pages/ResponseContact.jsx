
import {Link} from "react-router-dom"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function ErrorPage() {
  return (
    <>
    <div>
      <NavBar />
    </div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-3 fw-bold">Thank You</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Your Response is Recorded</span> 
          </p>
          {/* <p className="lead">The page you’re looking for doesn’t exist.</p> */}
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ErrorPage;
