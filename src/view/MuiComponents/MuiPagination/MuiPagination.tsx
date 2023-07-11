import React, {ChangeEvent} from "react";
import styles from './MuiPagination.module.scss'
import {Pagination, PaginationItem} from "@mui/material";
import {ArrowBackIcon, ArrowForwardIcon} from './MuiPagination.icons';

export type MuiPaginationProps = {
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
  totalPage?: number;
  defaultPage?:number;
};

const sxPropStyle = {
  background:'none',
  '& .MuiPaginationItem-text': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#222426',
    width: '44px',
    height: '44px',
    borderRadius: '0px'
  },
  '& .MuiPaginationItem-text:hover': {
    background: '#FFF9E5!important',
  },
  '& .Mui-selected': {
    color: '#222426',
    background: '#FFF2CC!important',
    borderRadius: '0px',
    width: '44px',
    height: '44px',
  },
  '& .Mui-selected:hover': {
    background: '#FFF2CC!important',
  },
  '& div.MuiPaginationItem-root': {
    display: 'flex',
    flexFlow: 'column-reverse',
    paddingBottom: '10px',
    width: '44px',
    height: '44px',
    borderRadius: '0px'
  },
  '& div.MuiPaginationItem-root:hover': {
    background: '#FFF9E5!important',
  },
  '& .MuiPagination_NextIcon': {
    margin: '0px',
  },
  '& .MuiPaginationItem-previousNext:hover':{
    background: 'none',
    borderRadius: '50px'
  }
}

const MuiPagination = (
  {
    onPageChange,
    totalPage = 0,
    defaultPage=1
  }: MuiPaginationProps) => {
  return (
    <div className={styles.container}>
      {totalPage > 0
        ? <Pagination
          siblingCount={0}
          defaultPage={defaultPage}
          count={totalPage}
          onChange={onPageChange}
          sx={sxPropStyle}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon
              }}
              {...item}
            />
          )}
        />
        : ""
      }
    </div>
  )
}

export default MuiPagination;