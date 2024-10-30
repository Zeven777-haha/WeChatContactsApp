const cloud = require('wx-server-sdk');
cloud.init();

const db = cloud.database();

exports.main = async (event, context) => {
  try {
    const contacts = await db.collection('contacts').get();
    return {
      success: true,
      data: contacts.data
    };
  } catch (e) {
    console.error('查询联系人失败：', e);
    return {
      success: false,
      error: e
    };
  }
};
