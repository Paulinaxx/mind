import { useNavigate } from "react-router-dom";
import chill from "/src/styles/img/chilling.jpg"
export default function Main_welcome_section() {
    const navigate = useNavigate();

    return(
        <main className="container">
            <div className="content">
            <div className="img_section">
                <img className= "chilling"
                     src={chill}
                     alt="man with coffe"
                />
            </div>
            <div className="welcome_section">
                <h1>It's easy to manage Your subscriptions.</h1>
            </div>
                <div className="big-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="gooey">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                                <feColorMatrix
                                    in="blur"
                                    type="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                    result="highContrastGraphic"
                                />
                                <feComposite
                                    in="SourceGraphic"
                                    in2="highContrastGraphic"
                                    operator="atop"
                                />
                            </filter>
                        </defs>
                    </svg>

                    <button id="gooey-button" onClick={() => navigate("/login")}>
                        try me
                        <span className="bubbles">
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        </span>
                    </button>
                </div>

            </div>
        </main>
    );
}