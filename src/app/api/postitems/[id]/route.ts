import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";
import { NextResponse } from 'next/server';

dbConnect();

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    try {
        const postItem = await PostItem.findById(params.id).select('-__v');
        
        if (!postItem) {
            return NextResponse.json(
                { message: 'No Item Found for This ID' },
                { status: 404 }
            );
        }

        return NextResponse.json(postItem);
    } catch (error) {
        return NextResponse.json(
            { message: 'An error occurred while fetching the post item' },
            { status: 500 }
        );
    }
}
