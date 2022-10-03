// import {useFund} from "../context/FundContext";
// import {List, AutoSizer} from "react-virtualized";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {useContext} from "react";
import FundingContext from "../context/FundingContext";
import "../styles/Home.css"

export default function Home() {

    const {funding, loading} = useContext(FundingContext);
    // const rowHeight = 200;
    // const width = 700;
    // const height = 1200;
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // const [page, setPage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(12);
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Fund Name', width: 350 },
        { field: 'exchange', headerName: 'Exchange', width: 150 },
        { field: 'ticker', headerName: 'Ticker', width: 150 },
        // {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90,
        // },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ];
    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    // function renderRow({index, key, style}) {
    //     return (
    //         <div key={key} style={style} className="fundContainer">
    //             <span className="fundItem">{funding[index].id}</span>
    //             <span className="fundItem">{funding[index].name}</span>
    //             <span className="fundItem">{funding[index].exchange}</span>
    //             <span className="fundItem">{funding[index].ticker}</span>
    //         </div>
    //     );
    // }
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };


    return loading?<div>
        <h1>
            loading
        </h1>
        </div> : (
        <div data-testid="my-test" style={{ height: 'calc(90vh - 80px)'}}>

            {/*<AutoSizer>*/}
            {/*    {*/}
            {/*        ({ width, height }) => {*/}
            {/*            return <List*/}
            {/*                width={width}*/}
            {/*                height={height}*/}
            {/*                rowHeight={rowHeight}*/}
            {/*                rowRenderer={renderRow}*/}
            {/*                rowCount={funding.length}*/}
            {/*                overscanRowCount={3}*/}
            {/*            />*/}
            {/*        }*/}
            {/*    }*/}
            {/*</AutoSizer>*/}
            {/*<List*/}
            {/*    width={width}*/}
            {/*    height={height}*/}
            {/*    rowHeight={rowHeight}*/}
            {/*    rowRenderer={renderRow}*/}
            {/*    rowCount={funding.length}*/}
            {/*    overscanRowCount={3}*/}
            {/*/>*/}
            {/*{*/}
            <DataGrid
                rows={funding}
                getRowId={(funding) => funding.id}
                columns={columns}
                rowsPerPageOptions={[5, 12, 15, 50, 100]}
                checkboxSelection
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
                {/*funding.map((fund, index)=> (*/}
                {/*    <div className="fundContainer" key={index}>*/}
                {/*        <span className="fundItem">{fund.id}</span>*/}
                {/*        <span className="fundItem">{fund.name}</span>*/}
                {/*        <span className="fundItem">{fund.exchange}</span>*/}
                {/*        <span className="fundItem">{fund.ticker}</span>*/}
                {/*    </div>*/}
                {/*))*/}
            {/*}*/}
        </div>
    )
}