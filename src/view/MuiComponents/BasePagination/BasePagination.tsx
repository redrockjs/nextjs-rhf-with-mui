import s from './BasePagination.module.scss'
import Pagination from "react-js-pagination";

type Props = {
  activePage: number,
  totalPages: number,
  pageRange: number
  onChange: (pageNumber: number) => void,
}

export function BasePagination(
  {
    activePage,
    totalPages,
    pageRange,
    onChange
  }: Props) {

  return (
    <div className={s.BasePagination}>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={totalPages}
        pageRangeDisplayed={pageRange}
        onChange={onChange}
        firstPageText={''}
        lastPageText={''}
        prevPageText={<PrevPageIcon/>}
        nextPageText={<NextPageIcon/>}
      />
    </div>

  )
}

const PrevPageIcon = () => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29 20L23 26L29 32" stroke="#222426" strokeWidth="1.4" strokeLinecap="square"/>
    </svg>
  )
}

const NextPageIcon = () => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 20L29 26L23 32" stroke="#222426" strokeWidth="1.4" strokeLinecap="square"/>
    </svg>
  )
}