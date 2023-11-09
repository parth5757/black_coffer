export const userColumns = [
    { field: "id", headerName: "ID", width: 70}, 
    {
        field: "user", 
        headerName:"User", 
        width: 130, 
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.Img} alt="avatar" />                
                </div>
            );
        },
    },
    {
        field:"Username", headerName:"User Name", width: 130,
    },
    
    {
        field:"email", 
        headerName:"Email", 
        width: 200,
    },
    {
        field:"age", 
        headerName:"Age", 
        width: 50,
    }, 
    {
        field: "status",
        headerName:"Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },  
];

export const userRows = [
    {
        id: 1,
        Username: "Alice",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "alice@blackcoffer.com",
        age: 21,
    },
    {
        id: 2,
        Username: "Bella",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "bella@blackcoffer.com",
        age: 25,
    },
    {
        id: 3,
        Username: "Charlotte",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "charlotte@blackcoffer.com",
        age: 27
    },
    {
        id: 4,
        Username: "Daisy",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "daisy@blackcoffer.com",
        age: 23
    },
    {
        id: 5,
        Username: "Ella",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "inactive",
        email: "ella@blackcoffer.com",
        age: 29
    },
    {
        id: 6,
        Username: "Fiona",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "fiona@blackcoffer.com",
        age: 31
    },
    {
        id: 7,
        Username: "Grace",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "grace@blackcoffer.com",
        age: 28
    },
    {
        id: 8,
        Username: "Hannah",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "inactive",
        email: "hannah@blackcoffer.com",
        age: 24
    },
    {
        id: 9,
        Username: "Isabella",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "isabella@blackcoffer.com",
        age: 26
    },
    {
        id: 10,
        Username: "Julia",
        Img: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.353270024.1699445558&semt=ais",
        status: "active",
        email: "julia@blackcoffer.com",
        age: 22
    }
    
]