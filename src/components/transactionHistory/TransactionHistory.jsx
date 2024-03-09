import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.transactionTableHead}>Type</th>
          <th className={css.transactionTableHead}>Amount</th>
          <th className={css.transactionTableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {Array.isArray(items) &&
          items.map((item) => {
            return (
              <tr className={css.transactionTableRow} key={item.id}>
                <td className={css.transactionTableData}>{item.type}</td>
                <td className={css.transactionTableData}>{item.amount}</td>
                <td className={css.transactionTableData}>{item.currency}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
