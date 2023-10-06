import "./SliderHome.scss"
import {  Menu } from 'antd';
import { UserOutlined, ReconciliationOutlined,VideoCameraOutlined,FileDoneOutlined,HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";
function SliderHome(){
  const location =useLocation()

    function getItem(key,label, icon, children) {
        return {
          key,
          icon,
          label,
          children,
          
        };
      }
    const items = [
        getItem('/',<Link to="home">Trang Chủ</Link> , <HomeOutlined />),
        getItem('class',<span className="layout__slider-item">Lớp</span> , <span className="layout__slider-item"><ReconciliationOutlined /></span>,[
          getItem('/add-class',<Link to="add-class">Thêm Lớp</Link>,null),
          getItem('/class-management',<Link to="class-management">Quản Lý Lớp</Link>,null)
        ]),
        getItem('students',<span className="layout__slider-item">Sinh Viên</span>, <span className="layout__slider-item">< UserOutlined /></span>,[
          getItem('/add-students',<Link to="add-students">Thêm Sinh Viên</Link>,null),
          getItem('/students-management',<Link to="students-management">Quản Lý Sinh Viên</Link>,null)
        ]),
       
      
    
        getItem('/statistical',<Link to="statistical">Thống Sinh Viên</Link> , <HomeOutlined />),
      ];
    return(
        <>
             <Menu className="layout__slider-menu"
               
                defaultSelectedKeys={location.pathname}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </>
    )
}
export default SliderHome