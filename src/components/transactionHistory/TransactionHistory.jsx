import css from './TransactionHistory.module.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};

export default TransactionHistory;
