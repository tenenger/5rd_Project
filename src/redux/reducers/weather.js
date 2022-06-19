import { createSlice } from "@reduxjs/toolkit";

// store reducers의 프로퍼티로 사용된다.
const name = "sido";

const initialState = { sido: "서울" };

const reducers = {
  // 첫번째 인자는 prevState이고, 두번째 인자부터는 사용자 입력 값이다.
  // 사용자 입력값은 payload 메소드를 통해 얻어낼 수 있다.
  handleSido(state, action) {
    state.sido = action.payload;
  },
};

// slice 정의
const sidoSlice = createSlice({
  name,
  initialState,
  reducers,
});

// counterSlice 내보내기 -> store의 reducers에 name과 같이 프로퍼티값으로 사용되어 redux 사용가능
export default sidoSlice.reducer;

// action 함수 내보내기 -> useDispatch로 정의한 함수의 인자로 사용되어 props 변경가능
export const { handleSido } = sidoSlice.actions;

// props 내보내기 -> useSelect의 인자로 사용되어 props 접근 가능
export const selectWeather = (state) => state.sido.sido;
