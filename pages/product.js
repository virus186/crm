import Head from 'next/head'
import mongoose from "mongoose";
import styles from '../styles/Product.module.css'
import Layout from './components/admin/Layout/Layout'
import Product from '../models/Product';
import MUIDataTable from "mui-datatables";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt, faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'

const columns = ["Name", "Sku", "Description", "Quantity", "S Price", "P Price", "Actions"];
 
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

const AllProduct = ({products,size}) => {
  let data = []
  /* if(products){
  products = JSON.parse(products)
  products.map((item)=>{

    let view_url = "/product/"+item._id
    let edit_url = "/product/"+item._id+'/edit'
    let delete_url = "/product/"+item._id+'/delete'
    let data2 =[]
    data2.push(item.title)
    data2.push(item.sku)
    data2.push(item.desc)
    data2.push(item.quantity)
    data2.push(item.price)
    data2.push(item.p_price)
    data2.push(<div className={styles.actionIcons}><Link href={view_url} ><a><FontAwesomeIcon icon={faExpandAlt} style={{width:"15px", cursor:"pointer"}} /></a></Link> <Link href={edit_url} ><a><FontAwesomeIcon icon={faEdit} style={{width:"15px", cursor:"pointer"}} /></a></Link> <Link href={delete_url} ><a><FontAwesomeIcon icon={faTrashCan} style={{width:"15px", cursor:"pointer"}} /></a></Link></div>)
    data.push(data2)

  })} */

  data = [
    ["Testing Product 1", "testing_product_1", "Testing Product 1 Description", "1000", "120", "75", "View Edit Delete"],
    ["Testing Product 2", "testing_product_2", "Testing Product 2 Description", "1000", "120", "75", "View Edit Delete"],
    ["Testing Product 3", "testing_product_3", "Testing Product 3 Description", "1000", "120", "75", "View Edit Delete"],
    ["Testing Product 4", "testing_product_4", "Testing Product 4 Description", "1000", "120", "75", "View Edit Delete"],
    ["Testing Product 5", "testing_product_5", "Testing Product 5 Description", "1000", "120", "75", "View Edit Delete"],
   ];


  return (
    <div>
      <Head>
        <title>Kiraanaghar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div className={styles.productContainer}>
      <div className={styles.productWrapper}>        
        <div className={styles.tableData}>
        <MUIDataTable
        title={"Manage Product"}
        data={data}
        columns={columns}
        options={options}
      />
        </div>
      </div>
    </div>
      </Layout>
    </div>
  )
}

/* export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGO_URL)
}

  let products = await Product.find({})

  return { props: { products: JSON.stringify(products), size: products.length } };
} */


export default AllProduct