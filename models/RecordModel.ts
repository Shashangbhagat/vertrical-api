import mongoose, { Schema, model } from 'mongoose';

export interface IRecord {
    _id?: mongoose.Types.ObjectId,
    title: string,
    avatar: string,
    description: string,
    shortDescription: string,
}

const schema = new Schema<IRecord>({
    title: { type: String, required: true },
    avatar: { type: String },
    description: { type: String },
    shortDescription: { type: String, required: true },
})

export const RecordModel = model<IRecord>('record', schema);
