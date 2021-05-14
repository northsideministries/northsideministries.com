import CMS from 'netlify-cms';
import styles from '!css-loader!./admin.scss';

CMS.registerPreviewStyle(styles.toString(), { raw: true });