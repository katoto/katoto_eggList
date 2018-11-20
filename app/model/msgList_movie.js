//  是用来定义数据类型的文件夹
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const msgListSchema = new Schema({
        _id: { type: String },
        picLink: { type: String },
        pic: { type: String },
        desc: { type: String },
        score: { type: String },
        name: { type: String },
    })
    return mongoose.model('MsgListMovie', msgListSchema, 'movie');
}

