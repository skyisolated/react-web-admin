import { Space, Tag } from 'antd';
import React from 'react';
import "./index.css";
import { useDispatch, useSelector } from 'react-redux';
import { TabItem } from '@/types/common';
import { closeTab, setCurrentTab } from '@/store/reducers/tab';
import { useLocation, useNavigate } from 'react-router-dom';
const TagList: React.FC = ()=> {
  // 这感觉很像dvajs中异步方法上的select啊
  const tags = useSelector((state:any)=>state.tab.tabList);
  const currentTab = useSelector((state:any)=>state.tab.currentTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // 如果你的方法有自己的参数，那么将该方法传给组件时，要用()=>handleClose()的形式
  const handleClose = (item: TabItem, index: number)=>{
    const length = tags.length - 1;
    dispatch(closeTab(item));
    // 关闭的tag如果是最后一个，将高亮移至前一个tag，否则移至后一个

    // 删除的不是当前tag
    if(item.path !== location.pathname){
      return;
    }
    if(index === length){
      const curData = tags[index - 1];
      dispatch(setCurrentTab(curData));
      navigate(curData.path);
    }else{
      if(tags.length > 1){
        const nextTag = tags[index + 1];
        dispatch(setCurrentTab(nextTag));
        navigate(nextTag.path);
      }
    }
  }
  const handleClick = (item: TabItem)=>{
    dispatch(setCurrentTab(item)); // 设置高亮
    navigate(item.path);
  }
  const renderTag = (selected: boolean, item: TabItem, index: number) => {
    return (
      selected ? 
      <Tag color='#55acee' key={item.name} closeIcon onClose={()=>handleClose(item, index)}>{item.label}</Tag>
      :
      <Tag key={item.name} onClick={()=>handleClick(item)}>{item.label}</Tag>
    );
  }
  return (
    <Space className='tag-list' wrap size={[0, 8]}>
      {
        currentTab.name && tags.map((item: TabItem, index:number) => (renderTag(item.path === currentTab.path, item, index)))
      }
    </Space>
  )
}
export default TagList;
