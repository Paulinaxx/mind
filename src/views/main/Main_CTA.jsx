import { Outlet } from "react-router-dom";

export default function Main_CTA () {
    return(
        <section className="CTA__container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique porta feugiat. Quisque aliquet justo ligula, eget egestas dolor eleifend vitae. Sed ac rutrum justo, non fringilla lectus. Pellentesque rutrum lobortis eros, id tempus lorem vulputate sollicitudin. Donec scelerisque dictum elit at vehicula. Aliquam dapibus ligula eu mi facilisis imperdiet. Aenean pretium massa at mauris aliquam, eget venenatis dolor feugiat.
                </p>
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
                    TRY ME
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
            {/*<Outlet />*/}
        </section>

    );
}

