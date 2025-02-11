import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../stores';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function getStyleValue<T extends keyof RootState['customize']['style']>(field: T) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useTypedSelector(state => state.customize.style[field]);
}
export default getStyleValue
