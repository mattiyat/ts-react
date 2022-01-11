import './assetList.css'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// type AssetListProps = {
//   rows: []
//   columns:
// }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Serial', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
]

const rows = [
  { id: 900394493, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 900439444, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 900305833, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 900394493, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 900392023, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 90403393, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 900394322, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 900394493, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 900390873, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

export default function AssetList() {
  return (
    <div className="assetList">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
