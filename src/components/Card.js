import { useEffect, useState } from "react"

function CardGrid({items, score, incrementScore, resetScore, assignBestScore, bestScore}) {

    var clickedItems = []
    var currScore = 0


    const [itemList, setItemList] = useState([])

    const cardClicked = (event) => {

        if (event) {
            if (clickedItems.includes(event.target.id)) {
                if (currScore>bestScore) {
                    bestScore = currScore
                }
                assignBestScore(currScore, bestScore)

                currScore = 0
                resetScore(currScore)
                
                clickedItems.length = 0
            } else {
                console.log({currScore, bestScore})

                currScore++
                incrementScore(currScore)
                
                clickedItems.push(event.target.id)
                
            }
        }

        const currItemList = []
        items.map((item) => {
            currItemList.push(<Card id={item.val} img={item.img} title={item.title} cardClicked={cardClicked}/>)
            return undefined
        })

        let shuffled = currItemList
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        setItemList(shuffled)
    }

    useEffect(() => {cardClicked()}, [])
    

    return(
        <div id="card-grid">
            {itemList}
        </div>
    )
}

const Card = ({id,img, title, cardClicked}) => {
    return(
        <div className="card" onClick={cardClicked}>
            <div id={id}  className="card-img" style={{background: ` url(${img}) center/cover no-repeat  `}}></div>
            <div className="card-title">{title}</div>
        </div>
    )
}

export default CardGrid