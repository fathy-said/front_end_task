import React, { useCallback, useEffect, useState } from 'react';
import './Table.css'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { IconButton, Typography, ButtonGroup, Popper, Grow, MenuItem, MenuList, TableRow, TableBody, Table, TableHead, TableContainer } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch, useSelector } from 'react-redux';
import { TableThunk } from '../../RTK/Thunk/TableThunk';
import { changePage, searchingID } from '../../RTK/Reducers/TableReducer';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const options = ['Unit ID', 'Unit type', 'Unit Price'];
//====
//====
//====
//====
const Tables = ({ setDisplayTypeModal, setImgModalData }) => {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);


  //fun close modal Popper menu
  const handleMenuItemClick = useCallback((event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  }, []);

  //fun toggle Popper menu
  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);

  }, []);

  //fun handle Popper menu
  const handleClose = useCallback((event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);

  }, []);




  // =========handle-redux=============
  let dispatch = useDispatch();
  let { dataTable, pageTarget } = useSelector((state) => state.TableReducer)

  // =========get-data-id=============

  useEffect(() => {
    dispatch(TableThunk())
  }, [dispatch]);
  // =========handle-searching-id=============

  let [tabID, setTabID] = useState('');
  useEffect(() => {
    // !isNaN(tabID) &&
    if (tabID.length) {
      dispatch(searchingID({ id: tabID }))
    }
    if (!tabID.length) {

      dispatch(changePage({ page: pageTarget }))
    }
  }, [tabID, dispatch, pageTarget]);




  // =========handle-redux=============


  return (
    <>
      <div className="tables-box container mt-[24px]">



        <Box component={'div'} sx={{ backgroundColor: '#F5F5F5', }} className='top max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-[20px] flex justify-between items-center w-full mb-[16px]'>
          <Typography variant="body1" color="initial" component={'div'} className='left' sx={{ display: 'flex', alignItems: 'center', height: '21px', gap: '8px' }}>
            <h5>Filters by ID:</h5>
            <input type="text" placeholder='ex: 45785' value={tabID} onChange={(e) => {
              setTabID(e.target.value)

            }} />
          </Typography>
          <Typography variant="body1" color="initial" component={'div'} className='right'>
            <span>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_21_1429)">
                  <path d="M4.5 9.59094H13.5" stroke="#9E9E9E" strokeWidth="1.5" clipPath="round" strokeLinejoin="round" />
                  <path d="M1.6875 6.21594H16.3125" stroke="#9E9E9E" strokeWidth="1.5" clipPath="round" strokeLinejoin="round" />
                  <path d="M7.3125 12.9659H10.6875" stroke="#9E9E9E" strokeWidth="1.5" clipPath="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_21_1429">
                    <rect width="18" height="18" fill="white" transform="translate(0 0.590942)" />
                  </clipPath>
                </defs>
              </svg>

            </span>
            <h6>Sort by:</h6>
            <ButtonGroup disableRipple variant="contained" ref={anchorRef} aria-label="split button" sx={{ backgroundColor: 'transparent', boxShadow: 'none ', border: '0', padding: 0 }}>
              <IconButton
                disableRipple
                sx={{ height: '30px', padding: '0px' }}
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}>
                <h4>  {options[selectedIndex]}</h4>

                <ChevronLeftIcon className='trans' />



              </IconButton>


            </ButtonGroup>
          </Typography>
        </Box>

        <TableContainer component={Paper} className="" sx={{ borderRadius: '4px' }}>

          <Table className='table' sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className=''>
              <TableRow>
                <StyledTableCell align="left">Unit ID</StyledTableCell>
                <StyledTableCell align="left">Unit type</StyledTableCell>
                <StyledTableCell align="left">Price </StyledTableCell>
                <StyledTableCell align="left">Build up area</StyledTableCell>
                <StyledTableCell align="left">For sale</StyledTableCell>
                <StyledTableCell align="left">Gallery</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                dataTable.length ? (
                  dataTable.map((el) => {
                    return (
                      <StyledTableRow key={el._id} >

                        <StyledTableCell align="left">{el.unit_id}</StyledTableCell>
                        <StyledTableCell align="left">{el.unit_type}</StyledTableCell>
                        <StyledTableCell align="left">{Number(el.total_price / 1000000).toFixed(1)} M EGP</StyledTableCell>
                        <StyledTableCell align="left">{el.bua} &#13217;</StyledTableCell>
                        <StyledTableCell align="left">
                          {
                            el.for_sale ? <span className=' uppercase text-white rounded-[3px] py-2 px-2 bg-[#2419BE] text-[9px] h-[20px]'>FOR SALE</span> :
                              <span className=' uppercase text-white rounded-[3px] py-2 px-2 bg-[#616161] text-[9px] h-[20px]'>NOT FOR SALE</span>
                          }
                        </StyledTableCell>
                        <StyledTableCell align="left"><img className=' w-[40px] h-[40px] object-cover cursor-pointer' src={el.photos[0]} alt="" onClick={() => {
                          setDisplayTypeModal('block')
                          setImgModalData(el.photos)
                        }} /></StyledTableCell>
                      </StyledTableRow>

                    )


                  })

                ) : null

              }


            </TableBody>
          </Table>

        </TableContainer>
        {/* =======Popper======= */}
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className='paper' sx={{ boxShadow: 'none' }}  >
                <ClickAwayListener onClickAway={handleClose} >
                  <MenuList id="split-button-menu" autoFocusItem >
                    {options.map((option, index) => (
                      <MenuItem
                        className='item'
                        key={option}
                        selected={index === selectedIndex}

                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {/* =======Popper======= */}

      </div>
    </>
  );
}

export default Tables;
