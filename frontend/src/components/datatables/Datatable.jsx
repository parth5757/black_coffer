import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';  //GridColDef, GridValueGetterParams
import { userColumns, userRows } from "../../datatablessource";
import {Link} from "react-router-dom";


const Datatable = () => {
  const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell:()=>{
    return(
      <div className="cellAction">
        <Link to="/users/test" style={{ textDecoration:"none" }}>
          <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link" style={{ textDecoration:"none" }}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSize={5}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
      />

    </div>
  )
}
export default Datatable;