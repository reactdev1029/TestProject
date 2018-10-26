import Metrics from '../utils/Metrics';

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main_content: {
    padding: 20,
  },
  btn_content: {
    width: 124 * Metrics.scaleWidth,
    height: 38 * Metrics.scaleHeight,
    backgroundColor: '#37e579',
    borderRadius: 5 * Metrics.scaleHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontSize: 15 * Metrics.scaleHeight,
    color: '#fff',
  },
  btn_view: {
    flexDirection: 'row',
    width: 270 * Metrics.scaleWidth,
    justifyContent: 'space-between',
    marginTop: 100 * Metrics.scaleHeight,
  },
  dtp_content: {
    width: 200 * Metrics.scaleWidth,
  },
};
