//  是用来定义数据类型的文件夹
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const msgListSchema = new Schema({
        _id: { type: String },
        titleLink: { type: String },
        titleName: { type: String },
        intro: { type: String }
    })
    return mongoose.model('EduClass6Yuwen', msgListSchema, 'edu_class6_yuwen');
}