import React, {FC} from 'react';
interface Props {
    keyField: any,
    noHeader: any,
    columns: any,
    data:any,
    progressPending: any,
    paginationServer: any,
    paginationTotalRows: any,

    loading:any,
    total:any,
    onChangeRowsPerPage: any,
    onChangePage:any
}
const DataTable: FC<Props> = ({children, ...props}) => {
    return (
        <DataTable
            keyField="id"
            noHeader
            columns={props.columns}
            data={props.data}
            progressPending={props.loading}
            // pagination
            paginationServer
            paginationTotalRows={props.total}
            onChangeRowsPerPage={props.onChangeRowsPerPage}
            onChangePage={props.onChangePage} loading={undefined} total={undefined}        />
    )}
export default DataTable;
 