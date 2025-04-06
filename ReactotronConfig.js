import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.useReactNative({
  asyncStorage: true,
  networking: {
    ignoreUrls: /symbolicate/,
  },
  editor: true,
  errors: { veto: stackFrame => false },
})
  .use(reactotronRedux())
  .connect();

export default reactotron;
