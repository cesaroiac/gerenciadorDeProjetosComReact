import PropTypes from 'prop-types';
import styles from './Container.module.css';

function Container({ children, customClass }) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

Container.defaultProps = {
  customClass: '',
};

export default Container;
