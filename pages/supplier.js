import Head from 'next/head'
import mongoose from "mongoose";
import styles from '../styles/Product.module.css'
import Layout from './components/admin/Layout/Layout'
import MUIDataTable from "mui-datatables";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt, faEdit, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import Suppliers from '../models/Suppliers';

const columns = ["Name", "Email", "Mobile", "Address", "Due", "Advance", "Actions"];
 
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

const Supplier = ({suppliers,size}) => {
  let data = []
  /* if(suppliers){
  suppliers = JSON.parse(suppliers)
  
  suppliers.map((item)=>{

    let view_url = "/supplier/"+item._id
    let edit_url = "/supplier/"+item._id+'/edit'
    let delete_url = "/supplier/"+item._id+'/delete'
    let data2 =[]
    data2.push(item.name)
    data2.push(item.email)
    data2.push(item.mobile)
    data2.push(item.address)
    data2.push(item.due)
    data2.push(item.advance)
    data2.push(<div className={styles.actionIcons}><Link href={view_url} ><a><FontAwesomeIcon icon={faExpandAlt} style={{width:"15px", cursor:"pointer"}} /></a></Link> <Link href={edit_url} ><a><FontAwesomeIcon icon={faEdit} style={{width:"15px", cursor:"pointer"}} /></a></Link> <Link href={delete_url} ><a><FontAwesomeIcon icon={faTrashCan} style={{width:"15px", cursor:"pointer"}} /></a></Link></div>)
    data.push(data2)

  })} */
  data = [
    ["Supplier 1", "supplier1@test.com", "8356982415", "Mumbai", "1000", "0", "View Edit Delete"],
    ["Supplier 2", "supplier2@test.com", "8356982415", "Mumbai", "1000", "0", "View Edit Delete"],
    ["Supplier 3", "supplier3@test.com", "8356982415", "Mumbai", "1000", "0", "View Edit Delete"],
    ["Supplier 4", "supplier4@test.com", "8356982415", "Mumbai", "1000", "0", "View Edit Delete"],
    ["Supplier 5", "supplier5@test.com", "8356982415", "Mumbai", "1000", "0", "View Edit Delete"],
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
        title={"Manage Suppliers"}
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

  let suppliers = await Suppliers.find({})

  return { props: { supplier: JSON.stringify(suppliers), size: suppliers.length } };
} */


export default Supplier