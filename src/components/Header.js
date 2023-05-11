const Header = ({score, bestScore}) => {

    return(
        <div id="header">
            <div id="header-left-section">
                <h1>Pokemon Memory Game</h1>
                Get Points by clicking on an image but dont click on any card more than once!
            </div>
            <div id="header-right-section">
                <p style={{lineHeight: '0.1px'}}>Score: {score} </p>
                <p style={{lineHeight: '0.1px'}}>Best Score: {bestScore}</p>
            </div>
        </div>
    )
}

export default Header