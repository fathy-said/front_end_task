import React, { useCallback, memo, useEffect } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Pagination, PaginationItem, } from '@mui/material';
import './PaginationBox.css'
import { useDispatch } from 'react-redux';
import { changePage } from '../../RTK/Reducers/TableReducer';
const PaginationBox = () => {
  const [page, setPage] = React.useState(1);
  let dispatch = useDispatch();

  const handleChange = useCallback((event, value) => {

    setPage(value);

  }, [])
  useEffect(() => {
    dispatch(changePage({ page: page }))

  }, [page, dispatch]);
  return (
    <>
      <div className="pagination container flex justify-center mt-4">
        <Pagination
          count={35}
          onChange={(event, value) => {
            handleChange(event, value)
          }}
          size='medium'

          page={page}
          renderItem={(item) => (
            <PaginationItem

              className=''
              slots={{ previous: NavigateBeforeIcon, next: KeyboardArrowRightIcon }}
              {...item}

            />
          )}
        />

      </div>
    </>
  );
}

export default memo(PaginationBox)
