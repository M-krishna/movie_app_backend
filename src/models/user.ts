import mongoose, { Schema } from 'mongoose'
import { hashSync, compareSync, genSaltSync, compare } from 'bcrypt';

import { IUser } from '@models/types'

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// hash the password
UserSchema.methods.generateHash = (password: string) => {
    return hashSync(password, genSaltSync(8))
}
// Validate password
UserSchema.methods.validPassword = function (password: string) {
    return compareSync(password, this.password)
}

export default mongoose.model<IUser>('User', UserSchema)