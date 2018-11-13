//  是用来定义数据类型的文件夹
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const msgListSchema = new Schema({
        name: { type: String },
        url: { type: String }
    })
    return mongoose.model('MsgListMusic', msgListSchema, 'music');
}

