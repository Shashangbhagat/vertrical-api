import { Request, Response } from "express";
import mongoose from "mongoose";
import { IRecord } from "../models/RecordModel";
import * as recordServices from "../services/RecordServices";

export const getAllSearchedRecords = 
    async (req: Request, res: Response): Promise<any> => {
        try {
            const searchTerm = String(req.query.searchTerm);
            const results: Array<IRecord> =
                await recordServices.
                    getAllSearchedRecords(searchTerm);
            return res.status(200).json(results)
        } catch(e) {
            return res.status(400).json(e);
        }
}

export const getRecord =
    async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const objectId = new mongoose.Types.ObjectId(id);
            const record: IRecord | null =
                await recordServices.
                    getRecord(objectId)
            return res.status(200).json(record);
        } catch(e) {
            return res.status(400).json(e)
        }
    }
