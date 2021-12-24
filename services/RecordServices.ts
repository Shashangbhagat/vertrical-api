import mongoose from 'mongoose'
import { RecordModel, IRecord} from "../models/RecordModel";


export const getAllSearchedRecords = 
    async (searchTerm: string): Promise<Array<IRecord>> => {
        return await RecordModel.find({
            title: { $regex: searchTerm, $options: 'i' } 
        });
    }

export const getRecord =
    async (id: mongoose.Types.ObjectId): Promise<IRecord | null> => {
        return await RecordModel.findOne({_id: id});
    }
