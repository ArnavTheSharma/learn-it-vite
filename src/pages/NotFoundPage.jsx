import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();
    return(
        <div className="h-80">
            <h1 className="pageTitle text-3xl font-bold mt-0">404: Page Not Found</h1>
            <button onClick={() => { navigate('/'); }} className="content-center w-1/5 m-auto display: block my-5 !bg-[#DD6C73] hover:!bg-rose-400">Home Page</button>
        </div>
    );
}

export default NotFoundPage;