import { useEffect } from 'react';
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/apiCalls';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handelDelete = id => {
        deleteProduct(id, dispatch);
    }

    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            width: 220
        },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.title}
                    </div>
                )
            }
        },
        {
            field: 'inStock',
            headerName: 'Stock',
            width: 200
        },
        {
            field: 'price',
            headerName: 'Price',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            with: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row._id}`}><button className='productListEdit'>Edit</button></Link>
                        <DeleteOutline className='productListDelete' onClick={() => handelDelete(params.row._id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={row => row._id}
                disableSelectionOnClick
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default ProductList;
