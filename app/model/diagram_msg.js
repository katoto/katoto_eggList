//  是用来定义数据类型的文件夹
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const msgListSchema = new Schema({
        _id: { type: String },
        artmsg: { type: String }

    })
    return mongoose.model('dapentiMsg', msgListSchema, 'dapenti_msg');
}