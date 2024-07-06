import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { RiSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#3a5a40',
        color: theme.palette.common.white,
        fontFamily: 'Figtree, sans-serif',
        fontSize: 16,
        fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
        fontWeight: 500,
        fontFamily: 'Figtree, sans-serif',
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

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
        >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
        >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
        >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
        >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const DataObatCoba = () => {
    const [obats, setObats] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [search, setSearch] = useState("")

    useEffect(() => {
        // Fungsi untuk mengambil data obat dari API
        const fetchObats = async () => {
            try {
                const response = await fetch('/api/obats'); // Sesuaikan dengan endpoint yang benar
                if (!response.ok) {
                    throw new Error('Gagal mengambil data obat');
                }
                const data = await response.json();
                setObats(data); // Simpan data obat dalam state
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchObats();
    }, []);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - obats.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
        <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
            <div className="mt-10 lg:w-1/2">
                <h1 className='text-3xl text-center font-[700] text-headingColor md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Ketahui macam-macam dan jenis obat-obatan.</h1>
                <p className='text-textColor mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nemo ut temporibus. Amet aspernatur tempore veritatis, deserunt illo.
                </p>
                <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
                    <form action="">
                        <div className="relative">
                            <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959ead]'/>
                            <input className='placeholder:font-bold placeholder:tracking-[0.5px] font-semibold text-textColor placeholder:text-[#959ead] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4 lg:m-0 my-3' placeholder='Cari obat' type="text" 
                            onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <Link to='#' className='w-full bg-primaryColor text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>
                            Cari
                        </Link>
                    </form>
                </div>
                <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
                    <span className='text-textColor font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>
                        Kata Kunci Populer:
                    </span>
                    <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                        <li className='rounded-lg bg-irisBlueColor bg-opacity-10 px-3 py-1.5 font-semibold text-[#01B5C5]'>Paracetamol</li>
                        <li className='rounded-lg bg-irisBlueColor bg-opacity-10 px-3 py-1.5 font-semibold text-[#01B5C5]'>Cetirizine</li>
                        <li className='rounded-lg bg-irisBlueColor bg-opacity-10 px-3 py-1.5 font-semibold text-[#01B5C5]'>Antacida</li>
                    </ul>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img className='w-[70%] ml-36' src="https://i.imgur.com/kNAdwxq.png" alt="Picture Header Data Obat" />
            </div>
        </section>

        <div className='flex justify-center my-5'>
            <h1 className='text-center text-2xl font-bold mb-5 tracking-wide'>DATA OBAT</h1>
        </div>

        <TableContainer component={Paper} className='my-5'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Nama</StyledTableCell>
                    <StyledTableCell align="center">Indikasi</StyledTableCell>
                    <StyledTableCell align="center">Komposisi</StyledTableCell>
                    <StyledTableCell align="center">Dosis</StyledTableCell>
                    <StyledTableCell align="center">Aturan Pakai</StyledTableCell>
                    <StyledTableCell align="center">Efek Samping</StyledTableCell>
                </TableRow>
                </TableHead>
                {/* <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.nama}>
                    <StyledTableCell component="th" scope="row">
                        {row.nama}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.indikasi}</StyledTableCell>
                    <StyledTableCell align="left">{row.komposisi}</StyledTableCell>
                    <StyledTableCell align="left">{row.dosis}</StyledTableCell>
                    <StyledTableCell align="left">{row.aturanpakai}</StyledTableCell>
                    <StyledTableCell align="left">{row.efeksmpg}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody> */}
                <TableBody>
                        {(rowsPerPage > 0
                            ? obats.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : obats
                        ).filter((obat) => {return search.toLowerCase() === '' ? obat : obat.title.toLowerCase().includes(search) || obat.indikasi.toLowerCase().includes(search)}).map((obat) => (
                            <TableRow key={obat._id}>
                                <StyledTableCell component="th" scope="row">
                                    {obat.title}
                                </StyledTableCell>
                                <StyledTableCell align="left">{obat.indikasi}</StyledTableCell>
                                <StyledTableCell align="left">{obat.komposisi}</StyledTableCell>
                                <StyledTableCell align="left">{obat.dosis}</StyledTableCell>
                                <StyledTableCell align="left">{obat.aturanpakai}</StyledTableCell>
                                <StyledTableCell align="left">{obat.efeksamping}</StyledTableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                </TableBody>
                
                <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'Semua', value: -1 }]}
                                colSpan={6}
                                count={obats.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </>
    )
}

export default DataObatCoba