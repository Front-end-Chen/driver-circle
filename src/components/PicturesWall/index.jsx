import React, { memo, useState } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

//将图片变成base64编码形式
// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
//   });
// }

export default memo(function PicturesWall() {
  //收集好的所有上传完毕的图片名
  const [fileList, setFileList] = useState([]);

  //当图片状态发生改变的回调
  const handleChange = async ({ file, fileList }) => {
    setFileList(fileList);
  };

  //关闭预览窗
//   handleCancel = () => this.setState({ previewVisible: false });

  //展示预览窗
//   handlePreview = async file => {
//     //如果图片没有url也没有转换过base64，那么调用如下方法把图片转成base64
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     //   //设置当前预览图片的信息
//     //   this.setState({
//     //       previewImage: file.url || file.preview,
//     //       previewVisible: true,
//     //       previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
//     //   });
//   };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );

  return (
    <>
      <Upload
        // action={`${BASE_URL}/manage/img/upload`} //发送上传请求的地址
        // method="post" //默认post
        // name="image" //上传图片发请求携带的参数名（图片名）
        listType="picture-card" //照片墙的展示方式
        fileList={fileList} //图片列表，一个数组里面包含着多个图片对象{uid:xxxx,name:xxx,status:xxx,url:xxx}
        // onPreview={handlePreview} //点击预览按钮的回调
        onChange={handleChange} //图片状态改变的回调（图片上传中、图片被删除、图片成功上传）
      >
        {/* 隐藏上传按钮的图片数量的阈值 */}
        {fileList.length >= 4 ? null : uploadButton}
      </Upload>
      <Modal
        // visible={previewVisible}
        // title={previewTitle}
        footer={null}
        // onCancel={handleCancel}
      >
        {/* <img alt="图片" style={{ width: "100%" }} src={previewImage} /> */}
      </Modal>
    </>
  );
});
