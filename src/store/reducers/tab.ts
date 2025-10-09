// 控制左侧标签页是否展开
import {createSlice, current} from '@reduxjs/toolkit';
const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    isCollapse: false,
    tabList: [
      {
        path: "/",
        name: "home",
        label: "首页"
      }
    ],
    currentTab:   {
        path: "/",
        name: "home",
        label: "首页"
    }
  },
  reducers: {
    collapseMenu: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    selectMenuList: (state, action) => {
      const {payload: val} = action;
      // 首页默认就有，不用添加
      if(val.name !== "home"){
        state.currentTab = val;
        // 防止重复添加
        const index = state.tabList.findIndex(item => item.name === val.name);
        if(index === -1){
          state.tabList.push(val);
        }
      }else{
        state.currentTab = {
          path: "/",
          name: "home",
          label: "首页"
        };
      }
    },
    closeTab: (state, action) => {
      const {payload: val} = action;
      const index = state.tabList.findIndex(item=>item.name === val.name);
      state.tabList.splice(index, 1);
    },
    setCurrentTab: (state, action) => { 
      const {payload: val} = action;
      if(val.name === 'home'){
        state.currentTab = {
          path: "/",
          name: "home",
          label: "首页"
        };
      }else{
        state.currentTab = val;
      }
    },
  },
});

export const {collapseMenu, selectMenuList, closeTab, setCurrentTab} = tabSlice.actions;
export default tabSlice.reducer;