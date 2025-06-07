import { connectDB} from '@/app/api/lib/mongodb'
import { Publication } from '@/app/api/model/Publication'
import mongoose from 'mongoose'

export async function POST(request: Request) {
  await connectDB()

  try {
    const body = await request.json()
    const { title, year, image } = body

    if (!title || !year || !image) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    const newPub = await Publication.create({ title, year, image })

    return new Response(JSON.stringify(newPub), { status: 201 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to create publication' }), { status: 500 })
  }
}

export async function GET() {
  await connectDB()

  try {
    const publications = await Publication.find({})
    return new Response(JSON.stringify(publications), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch publications' }), { status: 500 })
  }
}

export async function DELETE(request: Request) {
  await connectDB();

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing publication ID' }), { status: 400 });
    }

    // Validate the ID as a MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid publication ID' }), { status: 400 });
    }

    console.log('Request ID:', id);

    const deletedPub = await Publication.findByIdAndDelete(id);

    console.log('Deleted Publication:', deletedPub);

    if (!deletedPub) {
      return new Response(JSON.stringify({ error: 'Publication not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Publication deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting publication:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete publication' }), { status: 500 });
  }
}