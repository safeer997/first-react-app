
import styles from "./FoodItem.module.css";
function FoodItem({ item, handleOnclickBuyButton,bought  }) {

  

  return (
    <li className={`list-group-item ${bought && 'active'}`}>
      {item}
      <button
        onClick={handleOnclickBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
}
export default FoodItem;
