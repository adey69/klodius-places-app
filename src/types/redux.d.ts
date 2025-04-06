type IRootReducer = import('../redux').IRootReducer;
type IRootState = import('../redux').IRootState;
type IStore = ReturnType<typeof CreateStore>;
type IAppDispatch = IStore['reduxStore']['dispatch'];

interface IPlaceSliceState {
  previousSearches: PreviousSearch[];
}
