// 云函数入口文件 addContact
const cloud = require('wx-server-sdk');
cloud.init();

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const { name, phone } = event; // 从前端接收参数
  try {
    await db.collection('contacts').add({
      data: {
        name,
        phone
      }
    });
    return { success: true };
  } catch (e) {
    console.error('添加联系人失败：', e);
    return { success: false, error: e };
  }
};
