// 云函数入口文件 deleteContact
const cloud = require('wx-server-sdk');
cloud.init();

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const { id } = event; // 要删除的联系人 ID
  try {
    await db.collection('contacts').doc(id).remove();
    return { success: true };
  } catch (e) {
    console.error('删除联系人失败：', e);
    return { success: false, error: e };
  }
};

