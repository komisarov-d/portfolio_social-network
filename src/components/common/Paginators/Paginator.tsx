import React, {useState} from "react";
import s from './Paginator.module.css'
import cn from 'classnames'

type PropsTypes = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged?: (pageNumber:number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsTypes> = ({totalItemsCount, pageSize, currentPage, onPageChanged = x => x, portionSize = 10}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages:Array<number> = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(page => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === page
                    }, s.pageNumber)}
                                 key={page}
                                 onClick={() => {
                                     onPageChanged(page)
                                 }}
                    >{page}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    )
}

export default Paginator
