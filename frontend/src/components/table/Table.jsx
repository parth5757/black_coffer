import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const List = () => {
    const rows = [
        {
            id: 1,
            product: "Tata Nexon",
            img: "https://th.bing.com/th?id=OIP.cxR52T1QiBUTtQc3qdrOVAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            customer: 'het',
            date:  "1 Jan",
            amount: 1200000,
            methods: 'elctric',
            status: "Pending",

        },
        {
            id: 2,
            product: "Defender",
            img: "https://th.bing.com/th?id=OIP.0kBcxRYKNTMZsrtfrHkhtgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            customer: 'parth',
            date: "1 May",
            amount: 500000000000,
            methods: 'petrol',
            status: "Approved",

        },
        {
            id: 3,
            product: "Thar",
            img: "https://th.bing.com/th/id/OIP.4_f6kAkRPdRNWN2enp0xIwHaE7?w=229&h=180&c=7&r=0&o=5&pid=1.7",
            customer: 'jay',  
            date: "1 Oct",
            amount: 1500000,
            methods: "disel",
            status: "Approved",

        },

    ];
  return (
    <TableContainer component={Paper} className="table">
    <Table className="main-table" aria-label="simple table" >
      <TableHead>
        <TableRow>
            <TableCell className="tableCell">id</TableCell>
            <TableCell className="tableCell">Image</TableCell>
            <TableCell className="tableCell">product</TableCell>
            <TableCell className="tableCell">customer</TableCell>
            <TableCell className="tableCell">date</TableCell>
            <TableCell className="tableCell">amount</TableCell>
            <TableCell className="tableCell">methods</TableCell>
            <TableCell className="tableCell">status</TableCell>      
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell className="cellWrapper">
                    <img src={row.img} className="image" alt="Product"/>                    
                </TableCell>
                <TableCell cla  ssName="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.methods}</TableCell>
                <TableCell className="tableCell">
                  {/* <span className={'status ${row.status}'}>{row.status}</span> */}
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List;