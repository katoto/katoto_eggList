//  是用来定义数据类型的文件夹
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const msgListSchema = new Schema({
        _id: { type: String },
        titleLink: { type: String },
        titleName: { type: String },
        img: { type: String },
        baseDesc: { type: String },
        titletime: { type: String },
        author: { type: String },
    })
    return mongoose.model('nianzhaiListmsg', msgListSchema, 'nianzhai_listmsg');
}