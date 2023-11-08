import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';  //GridColDef, GridValueGetterParams
import { userColumns, userRows } from "../../datatablessource";

const Datatable = () => {
  const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell:()=>{
    return(
      <div className="cellAction">
        <div className="viewButton"></div>
        <div className="deleteButton"></div>
      </div>
    )
  }}];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSize={5}
        pageSizeOptions={[5,50]}
        checkboxSelection
      />

    </div>
  )
}
export default Datatable;