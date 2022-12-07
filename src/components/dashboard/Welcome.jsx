import women from "/src/styles/img/women.jpg"
export default function Welcome() {
    return(
        <div className="content__container">
            <div className="img_section">
                <img className= "women-showing"
                 src={women}
                 alt="women"
                />
            </div>
            <h1>Hello, You!</h1>
        </div>
    )
}

