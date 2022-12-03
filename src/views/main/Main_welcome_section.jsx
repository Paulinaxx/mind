export default function Main_welcome_section() {

    return(
        <>
        <main className="content__container">
            <div className="img_section">
                <img className= "chilling" src="./src/styles/img/chilling.jpg" alt="man with coffe"/>
            </div>
            <div clssName="welcome_section">
                <h1>It's easy to manage Your subscriptions.</h1>

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

                    <button id="gooey-button">
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
        </>
    );
}