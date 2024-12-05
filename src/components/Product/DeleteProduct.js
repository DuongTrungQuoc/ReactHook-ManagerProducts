import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { deleleProduct } from '../../services/productService';


function DeleteProduct(props) {
  const { item, onReload } = props;

  const deleteItem = async () => {
    const result = await deleleProduct(item.id);
    if (result) {
      onReload();
      Swal.fire({
        title: "Đã xóa!",
        text: "Bạn đã xóa thành công.",
        icon: "success"
      });
    }

  }

  const handleDelete = () => {
    //console.log(item.id);

    Swal.fire({
      title: "Bạn có chắc muốn xóa?",
      text: "Nếu xóa, bạn không thể khôi phục lại được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vẫn xóa!",
      cancelButtonText: "Hủy"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
      }
    });
  }

  return (
    <>
      <button onClick={handleDelete}>Xóa</button>
    </>
  )
}

export default DeleteProduct;