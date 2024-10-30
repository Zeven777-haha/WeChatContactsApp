// 云函数入口文件 modifyContact
const cloud = require('wx-server-sdk');
cloud.init();

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const { id, name, phone } = event; // 包括要修改的联系人 ID、姓名和电话
  try {
    await db.collection('contacts').doc(id).update({
      data: {
        name,
        phone
      }
    });
    return { success: true };
  } catch (e) {
    console.error('修改联系人失败：', e);
    return { success: false, error: e };
  }
};
